// Create web server

const express = require('express');
const app = express();
const port = 3000;

// Use the public directory for static files
app.use(express.static('public'));

// Use the comments API
app.use('/api/comments', require('./comments'));

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

// Path: comments.js
// Create the comments API

const express = require('express');
const router = express.Router();

// Mock comments data
const comments = [
  { id: 1, author: 'John Doe', body: 'Cool post!', postId: 1 },
  { id: 2, author: 'Jane Doe', body: 'Nice article', postId: 2 },
];

// Get all comments
router.get('/', (req, res) => {
  res.json(comments);
});

// Get comments by post ID
router.get('/:postId', (req, res) => {
  const postId = Number(req.params.postId);
  const postComments = comments.filter((comment) => comment.postId === postId);
  res.json(postComments);
});

module.exports = router;

// Path: public/index.html
// Create the front-end

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Comments App</title>
</head>
<body>
  <h1>Comments App</h1>
  <div id="comments"></div>
  <script>
    fetch('/api/comments')
      .then((response) => response.json())
      .then((comments) => {
        const commentsElement = document.getElementById('comments');
        comments.forEach((comment) => {
          const commentElement = document.createElement('div');
          commentElement.innerHTML = `<strong>${comment.author}</strong>: ${comment.body}`;
          commentsElement.appendChild(commentElement);
        });
      });
  </script>
</body>
</html>

// Path: package.json
// Add dependencies and scripts

{
  "name": "comments-app",
  "version": "1.0.0",
  "description": "A simple comments app",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  },
  "dependencies": {
    "express": "^4.