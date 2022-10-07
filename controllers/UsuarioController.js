var mongoose = require('mongoose');
var Usuario = require("../models/Usuario");

var usuarioController = {};

usuarioController.list = function(req, res){
    
    Usuario.find({}).exec(function(err, usuarios){
        if( err ){ console.log('Error: ', err); return; }
        console.log("The INDEX");
        res.render('../views/usuario/index', {usuarios: usuarios,titulo:'INDEX'} );
        
    });
    
};

usuarioController.create = function(req, res){
    res.render('../views/usuario/create');
};

usuarioController.save = function(req, res){
    var usuario = new Usuario( req.body );
    
    usuario.save(function(err){
        if( err ){ console.log('Error: ', err); return; }
        
        console.log("Successfully created a usuario. :)");
        //res.redirect("/usuario/show/"+usuario._id);
        res.redirect("/usuarios");
    });
};


module.exports = usuarioController;
