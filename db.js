const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhsot',
    user : 'root',
    password: '',
    database : 'db_blog'
});

connection.connect(function(err){
    if(err) throw err;
});

module.exports = connection;