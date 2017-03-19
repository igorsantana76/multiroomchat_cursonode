// Importar as configurações do servidor

var app = require('./config/server');

var server = app.listen(80, function(){
    console.log('Server online.');
});

var io = require('socket.io').listen(server);

// criando conexão por websocket

io.on('connection', function(socket){
    console.log('Usuario conectou');

    socket.on('disconnect', function(){
        console.log('Usuario desconectou');
    });
});