const express = require('express');
require('dotenv').config();
const request = require('request');
const app = express();

const port = process.env.PORT || 3001;

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: false}));

app.get('/', function(req, res) {
    res.render('index')
})

app.get('/posts', function(req, res) {
    let uri = 'https://jsonplaceholder.typicode.com/posts'
    request(uri, function (err, response, body) {
        let posts = JSON.parse(body)
        res.render('posts/index', {posts});
    })
})




app.listen(port, function() {
    console.log('You are spinning on ' + port);
})