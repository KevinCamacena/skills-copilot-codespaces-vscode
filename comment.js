// Create web server with express framework
// using a router
// handling request get '/', get '/create' post '/create' get "/:id/delete"
// get '/:id/edit' post '/:id/edit'
// get '/:id' post '/:id'
// get '/:id/like'

const express = require('express');
const router = express.Router();
const commentController = require('../controllers/comment.controller');

router.get('/', commentController.getCommentList);
router.get('/create', commentController.getCreateComment);
router.post('/create', commentController.postCreateComment);
router.get('/:id/delete', commentController.getDeleteComment);
router.get('/:id/edit', commentController.getEditComment);
router.post('/:id/edit', commentController.postEditComment);
router.get('/:id', commentController.getComment);
router.post('/:id', commentController.postComment);
router.get('/:id/like', commentController.getLikeComment);

module.exports = router;
