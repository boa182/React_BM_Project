
exports.userlogin = function(req, res, connection) {
    var user = req.query.username;
    var password = req.query.password;
    console.log(user,password);
    connection.query(`SELECT * from user where username = '${user}' and password='${password}'`, function(err, data) {
        if(data.length==0){
            //数据库中没有匹配到帐号密码
            res.send(false)
            connection.end();
        }else{
          
            res.send(true)
            connection.end();
        }
    })
}

