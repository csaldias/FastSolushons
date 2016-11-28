
exports.renderPaso1 = function(req, res){
    res.render('encuesta_paso1',{page_title:"Encuesta - Plataforma de Aprendizaje"});
};

exports.renderPaso2 = function(req, res){
    res.render('encuesta_paso2',{page_title:"Encuesta - Plataforma de Aprendizaje"});
};

exports.processEncuesta = function(req, res){
    var util = require('util');
    var db = require('./../db');
    console.log(util.inspect(req.body, false, null));
    console.log(util.inspect(req.session, false, null));
    var query = db.query("UPDATE estudiante SET ID_Categoria = ? WHERE usuario = ? ",[req.body.categoria,req.session.user], function(err, rows)
    {
        if (err)
            console.log("Error al actualizar: %s ",err );
        res.redirect('/');
    });
};