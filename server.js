const express = require('express');
const fs = require('fs');
const path = require('path');

const port = process.env.PORT || 3000;
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/html/home.html'));
});

app.get('/de.html', (req, res) => {
    res.render('/public/html/de.html', {
        pageTitle: 'DE'
    });
});

app.get('/fr.html', (req, res) => {
    res.render('/public/html/fr.html', {
        pageTitle: 'FR'
    });
});

app.get('/es_la.html', (req, res) => {
    res.render('/public/html/es_la.html', {
        pageTitle: 'esLA'
    });
});

app.get('/ko.html', (req, res) => {
    res.render('/public/html/ko.html', {
        pageTitle: 'KO'
    });
});

app.get('/th.html', (req, res) => {
    res.render('/public/html/th.html', {
        pageTitle: 'TH'
    });
});

app.get('/zh_cn.html', (req, res) => {
    res.render('/public/html/zh_cn.html', {
        pageTitle: 'zhCN'
    });
});

app.get('/zh_tw.html', (req, res) => {
    res.render('/public/html/zh_tw.html', {
        pageTitle: 'zhTW'
    });
});

app.get('/help', (req, res) => {
    res.send('<p>TESTING</p>');
});

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});
