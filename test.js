var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '123456',
    // 删掉了 database
});

connection.conne;

connection.query('CREATE DATABASE IF NOT EXISTS dbname default character set utf8mb4 collate utf8mb4_unicode_ci;', function (error, results,  fields) {
    if (error) throw error;
    console.log('创建数据库');
    console.log(results);
});

connection.query('use dbname;')
connection.query(`CREATE TABLE IF NOT EXISTS user(
    name text,
    age int
);`, function (error, results,  fields) {
    if (error) throw error;
    console.log('创建表');
    console.log(results);
});

connection.end();