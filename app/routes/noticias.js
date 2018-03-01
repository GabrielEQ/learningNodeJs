module.exports = function(req, res){
  application.get('/noticias', function(application,req, res){
    application.app.controllers.noticias.noticias();
  });

  application.get('/noticia', function( req, res){
    application.app.controllers.noticias.noticia(application, req, res);
  });
};
