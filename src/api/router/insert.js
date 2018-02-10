//例如:register表中增加phone为XX,password为注册XX的数据.
//功能：根据传进来的数据插入到数据库
//前提：先建立对应的数据库的表
//接受参数：需要插入的信息
//逻辑：(以后完善可以能要先判断数据库中是否已存在该数据)
//返回：obj.status为ture
//配置：路由：insert    require(该文件的路径).insert(req, res, connection)
//工作计划的插入
exports.setPlan = function(req, res, connection) {
	var title = req.query.title;
	var content = req.query.content;
	var deadline = req.query.deadline;

	connection.query(`INSERT into workplan (title,content,deadline)values('${title}','${content}','${deadline}')`, function(error, results, fields) {
		if(error) throw error;
		//results =>array类型
		console.log('The solution is: ', results);
		//把数据整理，返回到前端
		var obj = {
			news: results,
			status: true
		}
		res.send(JSON.stringify(obj));
		connection.end();
	})
}


exports.insert = function(req, res, connection) {
	var phone = req.query.phone;
	var password = req.query.password;
	connection.query(`INSERT into register (phone,password)values('${phone}','${password}')`, function(error, results, fields) {
		if(error) throw error;
		//results =>array类型
		console.log('The solution is: ', results);
		//把数据整理，返回到前端
		var obj = {
			news: results,
			status: true
		}
		res.send(JSON.stringify(obj));
		connection.end();
	})
}
//民宿信息验证成功之后，加入
exports.insertCheck = function(req, res, connection) {
	var price = req.query.price;
	var image_src = req.query.image_src;
	var title = req.query.title;
	var city = req.query.city;


	connection.query(`INSERT into homestary (price,image_src,title,city)values('${price}','${image_src}','${title}','${city}')`, function(error, results, fields) {
		if(error) throw error;
		//results =>array类型
		console.log('The solution is: ', results);
		//把数据整理，返回到前端
		var obj = {
			news: results,
			status: true
		}
		res.send(JSON.stringify(obj));
		connection.end();
	})
}
//订单插入
exports.inserthzj = function(req, res, connection) {
	console.log(req.query.room_id)
	var room_id = req.query.room_id;
	
	connection.query(`INSERT into orderform (room_id)values('${room_id}')`, function(error, results, fields) {
		if(error) throw error;
		//results =>array类型
		console.log('The solution is: ', results);
		//把数据整理，返回到前端
		
		res.send(results);
		connection.end();
	})
}