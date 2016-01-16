var socket = io();

socket.on('connect', function() {
    console.log('Connection successfull on the client side !');
});