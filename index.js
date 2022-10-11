require('dotenv').config();
const express = require('express');

const app = express();

app.set('view engine', 'ejs');

// top-level middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// routes
app.get('/ab', (req, res) => {
    // res.send(`<h2>Hello</h2>`);
    res.render('main', { name: "Sharon" });
    //main不用帶路徑 他自己就會去views找檔案
    // name: Sharon 帶值進去
});

app.get('/sale-json', (req, res) => {
    const sales = require(__dirname + '/data/sales');
    console.log(sales);
    res.render('sale-json', { sales });
});

app.get('/json_test', (req, res) => {
    res.json({ name: '小新', age: 30 });

    // res.json & res.send只能擇一使用
});

app.get('/try-qs', (req, res) => {
    res.json(req.query);
});

app.post('/try-post', (req, res) => {
    res.json(req.body);
});

app.get('/try-post-form', (req, res) => {
    res.render('try-post-form');
});

app.post('/try-post-form', (req, res) => {
    res.render('try-post-form', req.body);
});

// 前面擋到了 所以就放到
app.use(express.static('public'));
app.use(express.static('node_modules/bootstrap/dist'));
// C:\Users\Student\Desktop\shared\10. Node.js\node_SY\node_modules\bootstrap\dist\css

app.use((req, res) => {
    // res.type('text/html');
    res.status(404).render('404');
});

const port = process.env.SERVER_PORT || 3002;
app.listen(port, () => {
    console.log('server started');
})

// 環境設定 