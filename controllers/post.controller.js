const { validationResult } = require('express-validator');
const postServices = require('../services/post.service');

exports.createPost = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }
  
  const data = req.body;
  const createdPost = await postServices.createPost(data);
  return res.status(200).json(createdPost);
};

exports.updatePost = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  const id = req.params.id;
  const data = req.body;
  const updatedPost = await postServices.updatePost(id, data);
  if (!updatedPost) {
    return res.status(400).json({ error: 'Invalid post' });
  }
  return res.status(200).json(updatedPost); 
};

exports.getPosts = async (req, res) => {
  const posts = await postServices.getPosts();
  return res.status(200).json(posts);
};

exports.getPost = async (req, res) => {
  const id = req.params.id;
  const post = await postServices.getPost(id);
  if (!post) {
    return res.status(400).json({ error: 'Invalid post' });
  }
  return res.status(200).json(post);
};

exports.deletePost = async (req, res) => {
  const id = req.params.id;
  const deletedPost = await postServices.deletePost(id);
  if (!deletedPost) {
    return res.status(400).json({ error: 'Invalid post' });
  }
  return res.status(200).json(deletedPost);
};