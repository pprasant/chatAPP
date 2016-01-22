var PORT = process.env.PORT || 3000;
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var moment = require('moment');

app.use(express.static(__dirname + '/public'));

io.on('connection', function(socket) {
    console.log('user connection successfull !');
    
    socket.on('message', function(message) {
        console.log('Message received: ' + message.text);
        
        message.timestamp = moment().valueOf();
        io.emit('message', message);
    });
    
    socket.emit('message', {
        name: 'Prashant Singh',
        text: 'Welcome to the chat app',
        timestamp: moment().valueOf()
    });
});

http.listen(PORT, function() {
    console.log('Server Started');
});