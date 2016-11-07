
exports.list = function(req, res){

    req.getConnection(function(err,connection){

        var query = connection.query('SELECT * FROM users',function(err,rows)
        {

            if(err)
                console.log("Error Selecting : %s ",err );

            res.render('list_users',{page_title:"Usuarios - Plataforma de Aprendizaje",data:rows});


        });

        //console.log(query.sql);
    });

};

exports.add = function(req, res){
    res.render('add_cuser',{page_title:"Add Customers - Node.js"});
};

exports.register = function(req, res){
    res.render('register',{page_title:"Registrar - Plataforma de Aprendizaje"});
};

exports.login = function(req, res){
    res.render('login',{page_title:"Ingresar - Plataforma de Aprendizaje"});
};

exports.processLogin = function(req, res){
    res.render('login',{page_title:"Ingresar - Plataforma de Aprendizaje"});
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

        //console.log(query.sql);
    });
};

/*Save the customer*/
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


exports.delete_customer = function(req,res){

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