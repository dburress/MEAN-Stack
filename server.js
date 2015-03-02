/**
 * Created by dburress on 3/2/2015.
 */

var express = require('express');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

app.set('views', __dirname + '/server/views');
app.set('view engine', 'jade');

app.get('*', function(reg, res){
    res.render('index');
})

var port = 3030;
app.listen(port);
console.log('Listening on port ' + port + '...');