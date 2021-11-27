const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));
app.use(function (req, res, next) {
  res.setHeader(
        'X-Frame-Options',
        "SAMEORIGIN"
  );
  res.setHeader(
        'X-XSS-Protection',
        "1; mode=block"
  );
  next();
});
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(5008);
console.log('start server')