const commentModel = require('../models/commentModels');
const postModels = require('../models/postModels');
const postModel = require('../models/postModels');

const addComment = (req, res) => {
    let newComment = {
        comment: req.body.comment,
        post_id: req.params.id
    };
    let comment = new commentModel(newComment);
    comment.save()
        .then(() => {
            updatePostData(req.params.id,comment._id,res)
        })
        .catch(err => {
                    console.log(err);
                })
        .catch(err => {
            console.log(err)
        });
};

function updatePostData(postId, commentId, res) {
    postModel.findById(postId)
        .then(post => {
            post.comments.push(commentId);
            post.save()
                .then(() => {
                    res.redirect('/');
                })
                .catch(err => {
                    console.log(err);
                });
        })
        .catch(err => {
            console.log(err);
        });
}

module.exports = {
    addComment,
};
