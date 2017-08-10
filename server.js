const express = require('express');
const fs = require('fs');

const port = 3000;
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/html/de.html', (req, res) => {
    res.render('./public/html/de.html', {
        pageTitle: 'DE'
    });
});

app.get('/help', (req, res) => {
    res.send('<p>TESTING</p>');
});

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});
