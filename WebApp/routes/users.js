//Manejo del Controlador

//Listar usuarios según tipo
exports.list = function(req, res){
    req.getConnection(function(err,connection){
        var query = connection.query('SELECT * FROM users',function(err,rows)
        {
            if(err)
                console.log("Error Selecting : %s ",err );
            res.render('list_users',{page_title:"Usuarios - Plataforma de Aprendizaje",data:rows});
        });
        console.log(query.sql);
    });
};

exports.add = function(req, res){
    var util = require('util');
    var db = require('./../db');
    var post = req.body;
    console.log(`Received: ${util.inspect(req.body, false, null)}`);

    var data = {
        Nombre      : post.nombre+" "+post.apellido,
        Contraseña  : post.password,
        Correo      : post.email,
        Carrera     : post.carrera,
        Rol         : post.rol,
        usuario     : post.usuario
    };
    var query = db.query("INSERT INTO estudiante set ? ",data, function(err, rows)
    {
        if (err)
            console.log("Error al insertar: %s ",err );
        res.redirect('/');
    });
};

exports.login = function(req, res){
    var util = require('util');
    var post = req.body;
    console.log(req.session);
    console.log(post);
    //Obtener credenciales del usuario
    var db = require('./../db');
    var query = db.query('SELECT * FROM estudiante WHERE usuario = ?',[post.user.name],function(err,rows)
    {
        if(err)
            console.log("Error: %s ",err);
        if (rows[0].Contraseña == post.user.password) {
            req.session.user = post.user.name;
            res.redirect('/');
        } else {
            res.set('Content-Type', 'text/plain');
            res.send('User o Password incorrectos.');
        }
    });
};

exports.logout = function(req, res) {
    req.session.reset();
    res.redirect('/');
};

exports.edit = function(req, res){
    var id = req.params.id;
    req.getConnection(function(err,connection){
        var query = connection.query('SELECT * FROM users WHERE id = ?',[id],function(err,rows)
        {
            if(err)
                console.log("Error Selecting : %s ",err );
            res.render('edit_customer',{page_title:"Edit Customers - Node.js",data:rows});
        });
        console.log(query.sql);
    });
};

/*Save the userr*/
exports.save = function(req,res){
    var input = JSON.parse(JSON.stringify(req.body));
    req.getConnection(function (err, connection) {
        var data = {
            name    : input.name,
            address : input.address,
            email   : input.email,
            phone   : input.phone
        };
        var query = connection.query("INSERT INTO users set ? ",data, function(err, rows)
        {
            if (err)
                console.log("Error inserting : %s ",err );
            res.redirect('/usuarios');
        });
        // console.log(query.sql);
    });
};

exports.save_edit = function(req,res){
    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
    req.getConnection(function (err, connection) {
        var data = {
            name    : input.name,
            address : input.address,
            email   : input.email,
            phone   : input.phone
        };
        connection.query("UPDATE customer set ? WHERE id = ? ",[data,id], function(err, rows)
        {
            if (err)
                console.log("Error Updating : %s ",err );
            res.redirect('/usuarios');
        });
    });
};

exports.delete = function(req,res){
    var id = req.params.id;
    req.getConnection(function (err, connection) {
        connection.query("DELETE FROM users WHERE id = ? ",[id], function(err, rows)
        {
            if(err)
                console.log("Error deleting : %s ",err );
            res.redirect('/usuarios');
        });
    });
};

//Renderizado de Vistas
exports.register = function(req, res){
    res.render('register',{page_title:"Registrar - Plataforma de Aprendizaje"});
};

exports.renderLogin = function(req, res){
    res.render('login',{page_title:"Ingresar - Plataforma de Aprendizaje"});
};