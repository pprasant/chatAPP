var socket = io();

socket.on('connect', function() {
    console.log('Connection successfull on the client side !');
});

socket.on('message', function(message) {
    console.log('New message:');
    console.log(message.text);
})