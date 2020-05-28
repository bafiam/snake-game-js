const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();

// the __dirname is the current directory from where the script is running
app.use('/', serveStatic(path.join(__dirname, '/dist')));

// send the user to index html page inspite of the url
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/index.html'));
});

app.listen(port);

console.log(`app is listening on port: ${port}`);