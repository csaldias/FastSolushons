//App Setup =========================================================================

var express        = require('express');
var app            = express();                             // create our app w/ express
var bodyParser     = require('body-parser');                // pull information from HTML POST (express4)
var morgan         = require('morgan');                     // log requests to the console (express4)
var methodOverride = require('method-override');            // simulate DELETE and PUT (express4)

// Configuration ====================================================================
var users     = require('./routes/users');                  //Rutas de usuario
var encuesta  = require('./routes/encuesta');               //Rutas de encuesta
var contenido = require('./routes/contenido');              //Rutas de contenido

var session   = require('client-sessions');                 //Cookies para sesiones
app.use(session({
    cookieName: 'session',
    secret: 'hegqN678tC',
    duration: 30 * 60 * 1000,
    activeDuration: 5 * 60 * 1000,
}));

var db   = require('./db');                                 //Conexion a BD
var path = require('path');

//Seteamos el entorno
app.set('port', process.env.PORT || 9000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());

app.use(express.static(__dirname + '/public'));

// Devel, para poder ver los errores en el navegador
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}

//Rutas de las URL's de la Plataforma

app.get('/', contenido.loadContenido);
app.get('/login', users.renderLogin);
app.get('/logout', users.logout);
app.get('/register', users.register);
app.get('/perfil', users.renderModPerfil);
app.post('/user/details', users.getDetails);
app.post('/login/process', users.login);
app.post('/register/process', users.add);
app.get('/encuesta/paso1', encuesta.renderPaso1);
app.get('/encuesta/paso2', encuesta.renderPaso2);
app.post('/encuesta/process', encuesta.processEncuesta);

app.use(app.router);

// listen (start app with node server.js) ======================================
app.listen(app.get('port'));
console.log('Portal iniciado en http://localhost:' + app.get('port') + '/');