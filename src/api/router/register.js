//注册登录

//功能：注册。
//前提：先建立对应的数据库的表
//接受参数：注册的信息
//逻辑：先查数据库是否已注册，没有被注册才允许注册
//返回：注册成功/该手机已注册
//配置：路由：register    require(该文件的路径).register(req, res, connection)  


exports.register = function(req, res, connection) {
	//获取注册的手机，密码
	var phone = req.query.phone;
	var password = req.query.password;
	//先查找手机似乎否已被注册
	connection.query(`SELECT phone from register where phone = '${phone}'`, function(err, data) {
		//数据库中查不到手机号会返回空的数组
		if(data.length == 0) {
			connection.query(`INSERT into register (phone,password)values('${phone}','${password}')`, function(err, data) {
				
				res.send('注册成功')
			})
			//关闭数据库要写进判断里面
			connection.end();
		} else {
			res.send('该手机已注册')
			//关闭数据库要写进判断里面
			connection.end();
		}

	})

}

//注册管理者,就是这个

//var bodyParser = require('body-parser')
//app.use(bodyParser.urlencoded({
//	extended: false
//}))
exports.registerAdmin = function(req, res, connection) {
	//获取注册的手机，密码
	console.log(req.body)
	var username=req.body.username;
	var password = req.body.password;
	//先查找手机似乎否已被注册
	connection.query(`SELECT username from admin where username = '${username}'`, function(err, data) {
		//数据库中查不到手机号会返回空的数组
		if(data.length == 0) {
			connection.query(`INSERT into admin (username,password)values('${username}','${password}')`, function(err, data) {
				
				res.send(true)
			})
			//关闭数据库要写进判断里面
			connection.end();
		} else {
			res.send(false)
			//关闭数据库要写进判断里面
			connection.end();
		}

	})

}
//登录
//功能：登录。
//前提：先建立对应的数据库的表
//接受参数：登录的信息。
//逻辑：先查数据库帐号密码是否已注册，查询到有注册才允许登录
//返回：手机没注册或密码错误/登录成功
//配置：路由：login    require(该文件的路径).login(req, res, connection)  
exports.loginAdmin = function(req, res, connection) {

	
	var username = req.body.username;
	var password = req.body.password;
	console.log(username,password)
	//查找手机是否已经注册
	connection.query(`SELECT * from admin where username = '${username}' and password='${password}'`, function(err, data) {
		if(data.length==0){
			//数据库中没有匹配到帐号密码
			res.send(false)
			connection.end();
		}else{
			var obj = {
				news: data,
			}
			// res.send(JSON.stringify(obj));
			res.send(data);
			connection.end();
		}
	})
}