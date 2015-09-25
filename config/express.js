// config/express.js
var express = require('express');

module.exports = function() {
var app = express();
var home = require('../app/routes/home.js');
// configuração de ambiente
app.set('port', 3000);
app.set('view engine', 'ejs');
app.set('views','./app/views');
// middleware
app.use(express.static('./public'));
home(app);

return app;
};