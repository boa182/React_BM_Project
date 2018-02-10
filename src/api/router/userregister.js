exports.userregister = function(req, res, connection) {
    var username=req.body.username;
    var password = req.body.password;
    connection.query(`SELECT username from user where username = '${username}'`, function(err, data) {
       if(data.length == 0) {
            connection.query(`INSERT into user (username,password)values('${username}','${password}')`, function(err, data) {
                
                res.send(true)
            })
           connection.end();
        } else {
            res.send(false)
            connection.end();
        }
    })
}

