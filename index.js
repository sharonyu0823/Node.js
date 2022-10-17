require('dotenv').config();
const express = require('express');
const multer = require('multer');
// const upload = multer({ dest: 'tmp_upload/' }); //一定要有這個資料夾 最初的做法
const upload = require(__dirname + '/modules/upload-img');
const fs = require('fs').promises;
console.log(upload);
console.log(__dirname);
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
    console.log({ sales });

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

// ----------上傳表單-----------------

app.get('/try-post-form', (req, res) => {
    res.render('try-post-form'); //get會拿到表單
});

app.post('/try-post-form', (req, res) => {
    res.render('try-post-form', req.body);
}); //post會呈現資料

// ----------只上傳單一檔案-----------------

app.post('/try-upload', upload.single('avatar'), (req, res) => {
    res.json(req.file);
});

// ----------搬動檔案-----------------

app.post('/try-upload1', upload.single('avatar'), async (req, res) => {
    // 先判斷有沒有上傳的檔名 如果有的話再去搬動檔案
    if (req.file && req.file.originalname) {
        await fs.rename(req.file.path, `public/img/${req.file.originalname}`); //原本的路徑,新的路徑(並並且)
    } else {
        res.json({ msg: '沒有上傳檔案' });
    }
    res.json(req.file);
});

// ----------可以不用搬動檔案-----------------
// 寫完module後 就可以不用搬動檔案 回到最初的寫法
// 模組會自動幫忙搬動檔案

app.post('/try-upload2', upload.single('avatar'), async (req, res) => {
    res.json(req.file);
});

// ----------上傳多個檔案-----------------

app.post('/try-upload3', upload.array('photos'), async (req, res) => {
    res.json(req.files);
});

// ----------params-----------------
// 越寬鬆的規則放後面 越specific的規則放前面

app.get('/my-params1/:action?/:id?', async (req, res) => {
    res.json(req.params);
});

app.get('/my-params1/hello', async (req, res) => {
    res.send('hello');
}); //這個會被前面擋到 所以吃不到


// ==============================================

// 前面擋到了 所以就放到
app.use(express.static('public'));
app.use(express.static('node_modules/bootstrap/dist'));
// C:\Users\Student\Desktop\shared\10. Node.js\node_SY\node_modules\bootstrap\dist\css

// ==============================================

app.use((req, res) => {
    // res.type('text/html');
    res.status(404).render('404');
});

const port = process.env.SERVER_PORT || 3002;
app.listen(port, () => {
    console.log('server started');
})

// 環境設定 