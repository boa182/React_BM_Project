var express = require('express');
var app = express();
//链接数据库模块
var mysql = require("mysql");


//连接服务器配置.......................................................................
function createConnection() {
	var connection = mysql.createConnection({
		host: 'localhost',// 127.0.0.1
		user: 'root',
		password: '',
		database: 'homestay'
	});
	return connection
}
//解决跨域
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
   	res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    next();
});


app.use(express.static('public'));
// parse application/json 

//get请求.................................................................................
//更新民宿信息的接口
app.get('/edithhomestay', function(req, res) {
	//然后请求的很快的时候才能正常关闭链接、
	var connection = createConnection();
	connection.connect();
	//引入查找模块
	require('./router/update').edithhomestay(req,res,connection);
	console.log(req.query)
})


//.......................赖俊豪写的两个接口...........................................


app.get('/userlogin',function(req,res){
	// res.append("Access-Control-Allow-Origin", "*");
	var connection = createConnection();
	connection.connect();
	require('./router/userlogin.js').userlogin(req,res,connection);
})
//.......................赖俊豪写的两个接口................................................

//通过aid寻找管理员的信息
app.get('/selectaid', function(req, res) {
	
	var connection = createConnection();
	connection.connect();
	//引入查找模块
	require('./router/select').selectAid(req,res,connection);
	console.log(req.query)
})	
//订单插入
app.get('/insertord', function(req, res) {
	
	var connection = createConnection();
	connection.connect();
	//引入插入模块	
	require('./router/insert').inserthzj(req,res,connection)
	console.log(req.query)
})

//工作计划制定
app.get('/setplan', function(req, res) {
	
	var connection = createConnection();
	connection.connect();
	//引入插入模块	
	require('./router/insert').setPlan(req,res,connection)
	console.log(req.query)
})


//删除工作计划
app.get('/closeplan', function(req, res) {
	
	var connection = createConnection();
	connection.connect();
	//引入查找模块
	require('./router/del').closePlan(req,res,connection);
	console.log(req.query)
})

//解雇员工
app.get('/dismissal', function(req, res) {
	
	var connection = createConnection();
	connection.connect();
	//引入查找模块
	require('./router/del').disMissal(req,res,connection);
	console.log(req.query)
})

//删除homestary里面的民宿信息
app.get('/delethomestray', function(req, res) {
	
	var connection = createConnection();
	connection.connect();
	//引入查找模块
	require('./router/del').delSelf(req,res,connection);
	console.log(req.query)
})	

//删除checkhomestay里面的民宿信息
app.get('/deletcheck', function(req, res) {
	
	var connection = createConnection();
	connection.connect();
	//引入查找模块
	require('./router/del').delCheck(req,res,connection);
	console.log(req.query)
})	

//增加审核过关的民宿信息
app.get('/insertcheck', function(req, res) {
	
	var connection = createConnection();
	connection.connect();
	//引入插入模块	
	require('./router/insert').insertCheck(req,res,connection)
	console.log(req.query)
})


//增加
app.get('/insert', function(req, res) {
	
	var connection = createConnection();
	connection.connect();
	//引入插入模块	
	require('./router/insert').insert(req,res,connection)
	console.log(req.query)
})

//根据hid获取酒店数据
app.get('/selecthid', function(req, res) {
	
	var connection = createConnection();
	connection.connect();
	//引入查找模块
	require('./router/select').selectId(req,res,connection);
	console.log(req.query)
})	

//获取评论数
app.get('/selectcommon', function(req, res) {
	
	var connection = createConnection();
	connection.connect();
	//引入查找模块
	require('./router/select').selectCommon(req,res,connection);
	console.log(req.query)
})



//分页获取前端页面的商品数据
app.get('/selectpage', function(req, res) {
	
	var connection = createConnection();
	connection.connect();
	//引入查找模块
	require('./router/select').selectPage(req,res,connection);
	console.log(req.query)
})	
	
//获取所有前端页面的商品数据
app.get('/selectAll', function(req, res) {
	
	var connection = createConnection();
	connection.connect();
	//引入查找模块
	require('./router/select').selectAll(req,res,connection);
	console.log(req.query)
})

//获取所有我发布的求租信息 余路的接口（不要在打错名字了各位）
app.get('/myrelease', function(req, res) {
	
	var connection = createConnection();
	connection.connect();
	//引入查找模块
	require('./router/myRelease').myRelease(req,res,connection);
	console.log(req.query)
})	

//删除发布求租的信息 
app.get('/deleteRelease', function(req, res) {
	var connection = createConnection();
	connection.connect();
	//引入查找模块
	require('./router/deleteRelease').deleteRelease(req,res,connection);
	console.log(req.query)
})	


//查找所有travel里面的东西
app.get('/selectTravel', function(req, res) {
	//  解决跨域

	//然后请求的很快的时候才能正常关闭链接、
	var connection = createConnection();
	connection.connect();
	//引入查找模块
	require('./router/select').selectTravel(req,res,connection);
	console.log(req.query)
})	

// 每次查找十条酒店信息
app.get('/selecthotel', function(req, res) {
	//  解决跨域

	//然后请求的很快的时候才能正常关闭链接、
	var connection = createConnection();
	connection.connect();
	//引入查找模块
	require('./router/selecthotel').selecthotel(req,res,connection);
	console.log(req.query)
})	

// 查找分享
app.get('/selectShare', function(req, res) {
	//然后请求的很快的时候才能正常关闭链接、
	var connection = createConnection();
	connection.connect();
	//引入查找模块
	require('./router/share').selectShare(req,res,connection);
	console.log(req.query)
})	
	
// 酒店排序
app.get('/sorthotel', function(req, res) {
	//然后请求的很快的时候才能正常关闭链接、
	var connection = createConnection();
	connection.connect();
	//引入查找模块
	require('./router/sorthotel').sorthotel(req,res,connection);
	console.log(req.query)
})	

//查找所有审核表单里的东西
app.get('/checkhomestay', function(req, res) {
	//  解决跨域

	//然后请求的很快的时候才能正常关闭链接、
	var connection = createConnection();
	connection.connect();
	//引入查找模块
	require('./router/select').checkhomestay(req,res,connection);
	console.log(req.query)
})	

//获取所有workplan里面的东西
app.get('/getplan', function(req, res) {
	//然后请求的很快的时候才能正常关闭链接、
	var connection = createConnection();
	connection.connect();
	//引入查找模块
	require('./router/select').getplan(req,res,connection);
	console.log(req.query)
})	
//获取所有admin里面的东西
app.get('/getadmin', function(req, res) {
	//然后请求的很快的时候才能正常关闭链接、
	var connection = createConnection();
	connection.connect();
	//引入查找模块
	require('./router/select').getadmin(req,res,connection);
	console.log(req.query)
})	
//更新admin的员工评分
app.get('/changerate', function(req, res) {
	//然后请求的很快的时候才能正常关闭链接、
	var connection = createConnection();
	connection.connect();
	//引入查找模块
	require('./router/update').updaterare(req,res,connection);
	console.log(req.query)
})	

//获取订单信息
app.get('/getorder', function(req, res) {

	//然后请求的很快的时候才能正常关闭链接、
	var connection = createConnection();
	connection.connect();
	//引入查找模块
	require('./router/orderlist').orderlist(req,res,connection);

	console.log(req.query)
})	

//更新订单状态
app.get('/updateType', function(req, res) {

	var connection = createConnection();
	connection.connect();
	require('./router/update').updateType(req,res,connection);
	console.log(req.query)
})	



//要post请求...............................................................................
// parse application/x-www-form-urlencoded 
//使用bodyParser模块
//用于post请求获取参数
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({
	extended: false
}))
//鱼露
app.post('/release', function(req, res) {
	
	var connection = createConnection();
	connection.connect();
	//引入插入模块	
	require('./router/release').release(req,res,connection)
})


//注册管理者
app.post('/registeradmin', function(req, res) {
	//  解决跨域
	
	//然后请求的很快的时候才能正常关闭链接、
	var connection = createConnection();
	connection.connect();
	//引入插入模块	
	require('./router/register').registerAdmin(req,res,connection)
})
//验证登录者
app.post('/loginadmin', function(req, res) {
	//  解决跨域
	
	//然后请求的很快的时候才能正常关闭链接、
	var connection = createConnection();
	connection.connect();
	//引入插入模块	
	require('./router/register').loginAdmin(req,res,connection)
})



//赖俊豪写的
app.post('/userregister', function(req, res) {
	
	//然后请求的很快的时候才能正常关闭链接、
	var connection = createConnection();
	connection.connect();
	//引入插入模块	
	require('./router/userregister.js').userregister(req,res,connection)
})
app.post('/userchange', function(req, res) {
	var connection = createConnection();
	connection.connect();
	//引入插入模块	
	require('./router/userchange.js').userchange(req,res,connection)
})


//监听该端口..............................................................................
var server = app.listen(3000, function() {
	//测试
	//测试
	var host = server.address().address
	var port = server.address().port
	console.log("应用实例，访问地址为 http://%s:%s", host, port)
})