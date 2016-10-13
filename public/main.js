var app = angular.module('chatApp', [])

app.factory('socket', function() {
	var socket = io.connect('http://192.168.1.6:3000')
	return socket;
})

app.controller('ChatCtrl', function($scope, socket){

	$scope.msgs = [];
	$scope.sendMsg = function() {
		socket.emit("send msg", $scope.msg.text);
		$scope.msg.text='';
	}

	socket.on('get msg', function(data){
		$scope.msgs.push(data);
		$scope.$digest();


	})
})