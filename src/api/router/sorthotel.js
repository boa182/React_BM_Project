//酒店排序
exports.sorthotel = function(req, res, connection) {
    var city=req.query.city;
    city=decodeURI(city);
    var sort=req.query.sort;
    connection.query(`SELECT * FROM homestary where city='${city}' order by price ${sort}`, function(error, results, fields) {
        if(error) throw error;
        //results =>array类型
        console.log('The solution is: ', results);
        //把数据整理，返回到前端
       res.send(results);
        connection.end();
    });
}