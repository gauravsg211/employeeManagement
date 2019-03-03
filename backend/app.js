var express = require('express');
var app = express();
var getcontrollers=require('./routes/getcontrollers');
app.use('/',getcontrollers);
var postcontrollers=require('./routes//postcontrollers');
app.use('/',postcontrollers);

var sql = require('mssql');



    // config for your database
    var config = {
        user: 'sa',
        password: '123456',
        server: 'CYG190',
        database: 'hrms2'
    };

    // connect to your database
    sql.connect(config, function (err) {

        if (err) console.log(err);});


var server = app.listen(5000,()=> {
    console.log('Server is running..');

});
