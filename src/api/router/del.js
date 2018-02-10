

//功能：根据传进来的id在数据库中查找并删除该id对应数据。
//前提：先建立对应的数据库的表
//接受参数：用于查找的信息：id:5
//逻辑：
//返回：obj.status为ture
//配置：路由：delSelf    require(该文件的路径).delSelf(req, res, connection) 
exports.delSelf=function(req,res,connection){
	var hid = req.query.hid;
	connection.query(`delete FROM homestary where hid ='${hid}' `, function(error, results, fields) {
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
	});
	
}
//删除审核表的东西
exports.delCheck=function(req,res,connection){
	var hid = req.query.hid;
	connection.query(`delete FROM checkhomestay where hid ='${hid}' `, function(error, results, fields) {
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
	});
	
}

//解雇员工
exports.disMissal=function(req,res,connection){
	var aid = req.query.aid;
	connection.query(`delete FROM admin where aid ='${aid}' `, function(error, results, fields) {
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
	});
	
}

//删除工作计划
exports.closePlan=function(req,res,connection){
	var wid = req.query.wid;
	connection.query(`delete FROM workplan where wid ='${wid}' `, function(error, results, fields) {
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
	});
	
}