var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('data:image/png;base64,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', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
