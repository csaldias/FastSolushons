/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');

//Cargamos los modelos y controladores
var users = require('./routes/users');
var encuesta = require('./routes/encuesta');
var app = express();

var connection  = require('express-myconnection');
var mysql = require('mysql');

//Seteamos el entorno
app.set('port', process.env.PORT || 9000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());

app.use(express.static(path.join(__dirname, 'public')));

// Devel, para poder ver los errores en el navegador
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}

//Conexion con BD MySQL

app.use(

    connection(mysql,{

        host: 'localhost',
        user: 'root',
        password : 'fastat4wu7',
        port : 3306, //port mysql
        database:'fastsoluchons'

    },'pool')

);

//Rutas de las URL's de la Plataforma

app.get('/', routes.index);
app.get('/login', users.login);
app.get('/register', users.register);
app.post('/login_process', users.processLogin);
app.get('/encuesta_paso1', encuesta.renderPaso1);
app.get('/encuesta_paso2', encuesta.renderPaso2);
app.get('/encuesta_process', encuesta.processEncuesta);

//app.get('/usuarios', users.list);
//app.get('/usuarios/add', users.add);
//app.post('/usuarios/add', users.save);
//app.get('/usuarios/delete/:id', users.delete_customer);
//app.get('/usuarios/edit/:id', users.edit);
//app.post('/usuarios/edit/:id', users.save_edit);


app.use(app.router);

http.createServer(app).listen(app.get('port'), function(){
    console.log('Portal iniciado en http://localhost:' + app.get('port') + '/');
});