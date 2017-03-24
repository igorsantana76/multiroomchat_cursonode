// Importar as configurações do servidor

var app = require('./config/server');

var server = app.listen(3000, function(){
    console.log('Server online.');
});

var io = require('socket.io').listen(server);

app.set('io', io);

// criando conexão por websocket
io.on('connection', function(socket){
    console.log('Usuario conectou');

    socket.on('disconnect', function(){
        console.log('Usuario desconectou');
    });
    
    socket.on('msgParaServidor', function(data){

        /* dialogo */
        socket.emit('msgParaCliente', data);
        socket.broadcast.emit('msgParaCliente', data);

        /* participantes */
        if(!data.alreadySendTheName){
            socket.emit('participantesParaCliente', data.userName);
            socket.broadcast.emit('participantesParaCliente', data.userName);
        }

    });

});