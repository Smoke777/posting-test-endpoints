const Posts = require('../models/Posts');

module.exports.createPost = (data) => {
  const post = new Posts({
    title: data.title,
    description: data.description
  });
  const postSaved = post.save();
  return postSaved;
};

module.exports.updatePost = (id, data) => {
  const updatedPost = Posts.findOneAndUpdate({ _id: id }, { 
      title: data.title,
      description: data.description
  });
  return updatedPost;
};

module.exports.getPost = (id) => {
  const post = Posts.findById(id);
  return post;
};

module.exports.getPosts = () => {
  const posts = Posts.find();
  return posts;  
};

module.exports.deletePost = (id) => {
  const deletedPost = Posts.findOneAndRemove({ _id: id });
  return deletedPost;
};