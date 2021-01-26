const express = require('express');
const app = express();
const log = console.log;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home')
});


app.listen(3000, () => {
    log('Server is');
});