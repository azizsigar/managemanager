const express = require('express');
const route = express.Router();
const postController = require('../controller/postController')
const commentController = require('../controller/commentControllers')

route.get('/',postController.homePage)
route.get('/create-new-post',postController.CreateNewPostPage)
route.post('/submit-new-post', postController.submitNewPost)
route.post('/add-comment/:id',commentController.addComment)





module.exports = route;