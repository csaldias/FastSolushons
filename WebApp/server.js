/**
 * Module dependencies.
 */

var express = require('express');
var bodyParser = require('body-parser');
var routes = require('./routes');
var http = require('http');
var path = require('path');

//Cargamos los modelos y controladores
var users = require('./routes/users');
var encuesta = require('./routes/encuesta');
var index = require('./routes/index');
var app = express();

//Seteamos las cookies para mantener las sesiones
var session = require('client-sessions');
app.use(session({
    cookieName: 'session',
    secret: 'hegqN678tC',
    duration: 30 * 60 * 1000,
    activeDuration: 5 * 60 * 1000,
}));

//Cargamos la conexión con la BD
var db = require('./db');

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

/** bodyParser.urlencoded(options)
 * Parses the text as URL encoded data (which is how browsers tend to send form data from regular forms set to POST)
 * and exposes the resulting object (containing the keys and values) on req.body
 */
app.use(bodyParser.urlencoded({
    extended: true
}));

/**bodyParser.json(options)
 * Parses the text as JSON and exposes the resulting object on req.body.
 */
app.use(bodyParser.json());

// Devel, para poder ver los errores en el navegador
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}

//Rutas de las URL's de la Plataforma

app.get('/', users.login);
app.get('/cursos', index.index);
app.get('/register', users.register);
app.post('/login_process', users.processLogin);
app.post('/register_process', users.processRegister);
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