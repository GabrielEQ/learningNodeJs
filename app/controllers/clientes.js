module.exports.clientes = function(application, req, res){
  var connection = application.config.dbConnection();
  var clientesModel = new application.app.models.ClientesDAO(connection);

  clientesModel.getClientes(function(error, result){
      res.render('clientes/clientes', { resultClientes : result });
  });
}

module.exports.cliente = function(application, req, res){
  var connection = application.config.dbConnection();
  var clientesModel = new application.app.models.ClientesDAO(connection);

  var id_cliente = req.query;
  
  clientesModel.getCliente(id_cliente, function(error, result){
      res.render('clientes/cliente', { resultCliente : result });
  });
}