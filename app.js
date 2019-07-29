const express = require('express');

const app = express();
const port = process.env.PORT || 5000;
const path = require('path');

app.get('/', (req, res) => {
  res.sendFile(path.join(`${__dirname}/index.html`));
});

app.use('/images', express.static('images'));

app.use('/css', express.static('css'));

app.listen(port, () => console.log(`Listening on port ${port}!`));
