exports.release = function(req, res, connection) {
    var city = req.body.city;
    var district = req.body.district;
    var date = req.body.date;
    var room = req.body.room;
    console.log(city,district,date,room)
    connection.query(`INSERT into wanted (city,district,times,house_type)values('${city}','${district}','${date}','${room}')`, function(error, results, fields) {
        if(error) throw error;
        //results =>array类型
        console.log('The solution is: ', results);
        //把数据整理，返回到前端
        // var obj = {
        //     news: results,
        //     status: true
        // }
        res.send(true);
        connection.end();
    })
}