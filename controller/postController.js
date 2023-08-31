const postModel = require('../models/postModels');
// const commentModel =require('../models/commentModels');
const commentModels = require('../models/commentModels');

const homePage = (req,res)=>{
     postModel.find()   
     .populate(("comments"))
     .sort({created_at: -1})
     .then(data => {
             res.render("index", {
             posts:data
         })
     })
     .catch(err=>{
         console.log(err)
     })
    
}
const CreateNewPostPage =(req,res)=>{
    res.render('new-post',{
        err:""
    })}

    const submitNewPost = (req,res) => {
if(req.body.title === '' || req.body.desc === ""){
    res.render('new-post', {
        err: "fill the blanks boi"
    })
}else{
    let newPost = new postModel(req.body)
    newPost.save()
    .then(()=>{
        res.redirect('/')
    })
    .catch(err=>{
        console.log(err)
    })
}
}

module.exports = {
        homePage,
        CreateNewPostPage,
        submitNewPost
    }