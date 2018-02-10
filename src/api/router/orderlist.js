//查找订单所有的东西
exports.orderlist = function(req, res, connection) {

    connection.query(`SELECT
    *
    FROM orderform as a
    INNER JOIN homestary as b 
        INNER JOIN ordertype as c
    WHERE 
    a.room_id=b.hid AND a.user_id=${req.query.id} AND a.type=c.type;`,
 function(error, results, fields) {
        if(error) throw error;
        //results =>array类型
        
        //把数据整理，返回到前端
        console.log(results);
        res.send(results);
        connection.end();
    });
}