// Create web server with express
const express = require('express');
const app = express();
const port = 3000;

// Import commentModel
const commentModel = require('./models/comment');

// Middleware
app.use(express.json());

// Create a comment
app.post('/comments', async (req, res) => {
    const comment = await commentModel.create(req.body);
    res.json({ comment });
});

// Get all comments
app.get('/comments', async (req, res) => {
    const comments = await commentModel.find();
    res.json({ comments });
});

// Get a comment by ID
app.get('/comments/:id', async (req, res) => {
    const comment = await commentModel.findById(req.params.id);
    res.json({ comment });
});

// Update a comment by ID
app.put('/comments/:id', async (req, res) => {
    const comment = await commentModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ comment });
});

// Delete a comment by ID
app.delete('/comments/:id', async (req, res) => {
    const comment = await commentModel.findByIdAndDelete(req.params.id);
    res.json({ comment });
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});