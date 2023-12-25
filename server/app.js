const express = require('express');
const path = require('path')

const app = express();
const port = 3000;


// 메인 페이지
app.use(express.static(path.resolve(__dirname, './public')));
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '..', 'client', 'index.html'));
// });

// 라우터
app.use(require('./routers/index'));

// 서버
app.listen(port, () => {
    console.log(`server is running at ${port}`);
});