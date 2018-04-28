app.post('/', function(req, res) {
    res.send('您当前的请求是post');
})


// 匹配根路径的请求
app.get('/', function(req, res) {
    res.send('root');
});

// 匹配 /about 路径的请求
app.get('/about', function(req, res) {
    res.send('about');
});

// 匹配 /random.text 路径的请求
app.get('/random.text', function(req, res) {
    res.send('random.text');
});