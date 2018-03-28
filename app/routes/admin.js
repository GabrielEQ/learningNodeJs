module.exports = function(application){
    application.get('/novo-cliente', function(req, res){
      application.app.controllers.admin.addCliente(application, req, res);
    });

    application.post('/clientes/salvar', function(req, res){
      application.app.controllers.admin.clienteSalvar(application, req, res);
    });
};
