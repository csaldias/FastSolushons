exports.loadContenido = function(req, res){
    //Estamos logeados?
    if (req.session && req.session.user) {
        //Obtenemos info del usuario
        var db = require('./../db');
        var util = require('util');
        var query = db.query('SELECT ID_Categoria FROM estudiante WHERE usuario = ?',[req.session.user],function(err,rows)
        {
            console.log(util.inspect(rows[0], false, null));
            if(err)
                console.log("Error: %s ",err);
            //La enuesta está respondida?
            if (rows[0].ID_Categoria != null) {
                console.log("Existe!");
                res.render('cursos', { title: 'Plataforma de Aprendizaje' });
            } else {
                console.log("No existe.");
                res.redirect('/encuesta/paso1');
            }
        });
    } else {
        //Como no estamos logeados, lo hacemos
        res.redirect('/login');
    }
};