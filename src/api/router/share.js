//查找travel所有的东西
exports.selectShare = function(req, res, connection) {
    console.log(req.query.uid);

    connection.query(`SELECT * FROM share where uid=${req.query.uid}`, function(error, results, fields) {
        if(error) throw error;
        //results =>array类型
        
        //把数据整理，返回到前端
        
        res.send(results);
        connection.end();
    });
}