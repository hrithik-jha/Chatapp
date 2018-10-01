//Making connection
var socket= io.connect('http://localhost:4200');

//Queries
var message = document.getElementById('message'),
    handle = document.getElementById('username'),
    btn = document.getElementById('send'),
    output = document.getElementById('output');

//Emit events
btn.addEventListener('click', function(){
    socket.emit('chat', {
        message: message.value,
        handle: handle.value
    });
    document.getElementById('message').value='';
});

//console.log(data.handle);

//Listen to events
socket.on('chat', function(data){
    output.innerHTML += '<p><strong>' + data.handle + ': </strong>' + data.message + '</p>';
});
