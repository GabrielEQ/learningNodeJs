module.exports = function(application){

  application.get('/clientes', function(req,res){

      application.app.controllers.clientes.clientes(application, req, res);

  });

  application.get('/cliente', function(req,res){

      application.app.controllers.clientes.cliente(application, req, res);

  });
}
