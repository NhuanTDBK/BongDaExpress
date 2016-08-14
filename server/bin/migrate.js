var path = require('path');

var app = require(path.resolve(__dirname, '../server'));
var dataSource = app.datasources.MongoDB;

dataSource.automigrate(function(err) {
  if (err) throw err;

});

dataSource.automigrate('user', function(err) {
  if (err) throw err;

  console.log('User model migrated');
  dataSource.disconnect();
});
