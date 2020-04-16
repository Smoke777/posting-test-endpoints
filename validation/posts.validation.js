const { check } = require('express-validator');

module.exports.postCreateUpdate = [
  check('title')
    .trim()
    .notEmpty().withMessage('Title cannot be blank'),
  check('description')
    .trim()
    .notEmpty().withMessage('Description cannot be blank')
];