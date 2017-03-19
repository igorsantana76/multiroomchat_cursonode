// Importar as configurações do servidor

var app = require('./config/server');

var server = app.listen(80, function(){
    console.log('Server online.');
});

require('socket.io').listen(server);
