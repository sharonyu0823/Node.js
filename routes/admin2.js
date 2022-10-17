const express = require('express'); //參照使用
const router = express.Router();

router.get('/bbb/:action?/:id?', (req, res) => {
    console.log(req);
    const { params, url, baseUrl, originalUrl } = req; //解構
    res.json({ params, url, baseUrl, originalUrl })
})

module.exports = router;