module.exports.addCliente = function(application, req, res) {
  res.render('admin/add-cliente'/*, {validacao: {}, cliente: {}}*/);
}

module.exports.clienteSalvar = function(application, req, res){
  var cliente = req.body;

  // var erros = req.validationErrors();

  // if(erros){
  //   res.render('admin/form_add_noticia', {validacao: erros, noticia : noticia});
  //   return;
  // }

  var connection = application.config.dbConnection();
  var clientesModel = new application.app.models.ClientesDAO(connection);

  //save e reditrect to news
  clientesModel.salvarCliente(cliente, function(error, result){
      res.redirect('/clientes');
  });
}
