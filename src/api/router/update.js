//修改..........................

//功能：更新admin里面的评分
exports.updaterare=function(req,res,connection){
	console.log(req);
	var aid = req.query.aid;
	var rate = req.query.rate;
			//注意数据类型，字符串要加引号，int不要加引号
	connection.query(`update admin set rate='${rate}' where aid = '${aid}'`, function(error, results, fields) {
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
//功能：更新商品列表里面的信息
exports.edithhomestay = function(req,res,connection){
	console.log(req);
	var hid = req.query.hid;
	var city = req.query.city;
	var title = req.query.title;
	var price = req.query.price;
			//注意数据类型，字符串要加引号，int不要加引号
	connection.query(`update homestary set city='${city}',title='${title}',price='${price}' where hid = '${hid}'`, function(error, results, fields) {
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
//更改订单状态
exports.updateType = function(req,res,connection){
	console.log(req);
	var id = req.query.id;
	var type = req.query.type;
			//注意数据类型，字符串要加引号，int不要加引号
	connection.query(`update orderform set type='${type}' where id = '${id}'`, function(error, results, fields) {
		if(error) throw error;
		//results =>array类型
		console.log('The solution is: ', results);
		//把数据整理，返回到前端
		
		res.send(results);
		connection.end();
	})	
}