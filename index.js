var express = require('express');
var path = require('path');
var app = express();

//中间件  管道
app.use(express.static("public"));

/*项目开始位置-------------------------------------*/

app.get('/start', function get(req, res) {
    res.sendFile(__dirname + '/public/index.html'); //这里需要注意的是，sendFile和senfile首先是不同的，而且在sendFile是不可以存放相对路径的  (../ & ./)
})

//去下载
app.get('/download', function(req, res) {
    res.download('../htmlTemplate/pdf/hello.pdf');
});


//json返回
app.get('/getUserInfo', function(req, res) {
    console.log('web start requesting')
    res.status(200).json({
        'name': 'lijin',
        'age': '23'
    });
});


var server = app.listen(3000, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});