var mysql = require('mysql');

var connMySQL = function(){
    console.log('Conexão foi estabelecida.');
    
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '142184Biel',
        database: 'terrinha'
    });
}

module.exports = function(){
    return connMySQL;
}

        