//查找travel所有的东西
exports.selecthotel = function(req, res, connection) {
    console.log(111);
    var pageCount = 10;
    var page = (req.query.page);
    var pageEnd = pageCount * (page);
    var city=decodeURI(req.query.city); 
    connection.query(`SELECT * FROM homestary where city='${city}' limit ${pageEnd}`, function(error, results, fields) {
        if(error) throw error;
        //results =>array类型
        console.log('The solution is: ', results);
        res.send(results);
        connection.end();
        // connection.query(`SELECT count(*) as total FROM homestary where city='${city}'`, function(error, data, fields) {
        // if(error) throw error;
        // //results =>array类型
        // console.log('The solution is: ', results);
        // res.send({results,data});
        // connection.end();

        
    // });

    });

    // connection.query(`
    //     select
    //             SQL_CALC_FOUND_ROWS
    //             *
    //         from
    //             homestary
    //             WHERE city='${city}' limit ${pageEnd};
    //         select count(*) as rowscount from homestary where city='${city}' ;`, function(error, results, fields) {
    //     if(error) throw error;
    //     //results =>array类型
    //     console.log('The solution is: ', results);
    //     res.send(results);
    //     connection.end();
    // });
    
}