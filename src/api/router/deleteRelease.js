exports.deleteRelease = function(req, res, connection) {

    connection.query(`DELETE FROM wanted WHERE id = ${req.query.id}`, function(error, results, fields) {
        if(error) throw error;
        results =>array类型
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