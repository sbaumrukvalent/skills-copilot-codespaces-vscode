// Create web server
// Create a web server that listens on port 8080 and returns the contents of the comments.json file.
// The comments.json file contains an array of comments. Create a route that returns the comments as a JSON response.
// Create a route that returns a single comment based on the id provided in the URL.
// If the comment does not exist, return a 404 response.
// Create a route that returns all comments that contain the search term provided in the URL.
// If no comments contain the search term, return a 404 response.
// Create a route that returns all comments that contain the search term provided in the URL.
// If no comments contain the search term, return a 404 response.
// Create a route that returns all comments that contain the search term provided in the URL.
// If no comments contain the search term, return a 404 response.

const express = require('express');
const app = express();
const fs = require('fs');
const PORT = 8080;

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/comments', (req, res) => {
  fs.readFile('comments.json', 'utf8', (err, data) => {
    if (err) {
      res.status(404).send('404 Not Found');
    }
    res.json(JSON.parse(data));
  });
});

app.get('/comments/:id', (req, res) => {
  fs.readFile('comments.json', 'utf8', (err, data) => {
    if (err) {
      res.status(404).send('404 Not Found');
    }
    const comments = JSON.parse(data);
    const comment = comments.find((comment) => comment.id === parseInt(req.params.id));
    if (!comment) {
      res.status(404).send('404 Not Found');
    }
    res.json(comment);
  });
});

app.get('/comments/search/:term', (req, res) => {
  fs.readFile('comments.json', 'utf8', (err, data) => {
    if (err) {
      res.status(404).send('404 Not Found');
    }
    const comments = JSON.parse(data);
    const search = req.params.term;
    const searchComments = comments.filter((comment) => comment.comment.includes(search));
    if (!searchComments.length) {
      res.status(404).send('404 Not Found');
    }
    res.json(searchComments);
})});