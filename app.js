var express = require('express');
app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

server.listen(3000, function(req,res){
	console.log("listening.....");

});

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/bower_components'));
io.sockets.on('connection',function(socket){
	console.log("client connected..");
	socket.on('send msg', function(data){
		console.log(data);
		io.sockets.emit('get msg',data);
	}) 
})