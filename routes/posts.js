const express = require('express');
const postValidation = require('../validation/posts.validation');
const postController = require('../controllers/post.controller');

const router = express.Router();

router.post('/', postValidation.postCreateUpdate, postController.createPost); 
router.put('/:id', postValidation.postCreateUpdate, postController.updatePost); 

router.get('/:id', postController.getPost);
router.get('/', postController.getPosts);

router.delete('/:id', postController.deletePost);

module.exports = router;