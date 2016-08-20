module.exports = function(app) {
  var router = app.loopback.Router();
  router.get('/posts', function(req, res) {
    res.send('pongaroo');
  });
  router.get('/post/create', function(req, res) {
    res.render('editor-page');
  });
  app.use(router);
}
