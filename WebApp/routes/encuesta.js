
exports.renderPaso1 = function(req, res){
    res.render('encuesta_paso1',{page_title:"Encuesta - Plataforma de Aprendizaje"});
};

exports.renderPaso2 = function(req, res){
    res.render('encuesta_paso2',{page_title:"Encuesta - Plataforma de Aprendizaje"});
};

exports.processEncuesta = function(req, res){
    res.render('register',{page_title:"Registrar - Plataforma de Aprendizaje"});
};