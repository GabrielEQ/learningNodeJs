module.exports.noticias = function() {
  var connection = application.config.dbConnection();
  var noticiasModel = new application.app.models.NoticiasDAO(connection);

  noticiasModel.getNoticias(function(error, result){
      res.render("noticias/noticias", {noticias: result});
  });
};

module.exports.noticia = function () {
  var connection = application.config.dbConnection();
  var noticiasModel = new application.app.models.NoticiasDAO(connection);

  noticiasModel.getNoticia(function(error, result){
      res.render('noticias/noticia', { noticia: result});
  });
};
