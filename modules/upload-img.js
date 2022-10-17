const multer = require('multer');
const { v4: uuidv4 } = require('uuid');

const extMap = {
    'image/jpeg': '.jpg',
    'image/png': '.png',
    'image/gif': '.gif',
}

const fileFilter = (req, file, callback) => {
    // !!extMap[file.mimetype] //!!相當於轉換成boolean值
    callback(null, !!extMap[file.mimetype]);
    //第一個參數: 必須要接受error 如果沒有錯誤是空值
    //第二個參數: 取得boolean值 去判斷檔案是不是我們接受的檔型
}

const storage = multer.diskStorage({
    // 裡裡面是一個object
    destination: (req, file, cb) => {
        cb(null, __dirname + '/../public/uploads/');
    },
    filename: (req, file, cb) => {
        const ext = extMap[file.mimetype]; //副檔名
        cb(null, uuidv4() + ext); //亂數加附檔名
    },

});
// 因為是寫成模組 所以要做匯出
s = multer({ storage, fileFilter });

