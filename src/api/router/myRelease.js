//通过id查找homestay里面的东西
exports.myRelease = function(req, res, connection) {
    // 查找......................
    connection.query(`SELECT * FROM wanted`, function(error, results, fields) {
        if(error) throw error;
        //results =>array类型
        console.log(results);
        //把数据整理，返回到前端
        // var obj = {
        //     news: results,
        // }
        res.send(results);
        connection.end();
    });
}