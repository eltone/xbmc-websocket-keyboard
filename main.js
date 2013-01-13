bean.on(window, 'keydown', function(e){
	e.preventDefault();
	var keyCode = e.keyCode;

	var command = map[keyCode];
	if(command){
		sendInputCommand(command);
	}
	else{
		console.log(keyCode);
	}
});

var map = {
	37: 'Left',
	39: 'Right',
	38: 'Up',
	40: 'Down',
	13: 'Select',
	8: 'Back',
	67: 'ContextMenu'
};

function sendInputCommand(command){
	var message = '{"jsonrpc": "2.0", "method": "Input.' + command + '", "id": 1}';
	console.log(message);
	ws.send(message);
}

var ws = new WebSocket('ws://192.168.0.19:9090/jsonrpc');
ws.onopen = function() {
	console.log('open');
};
ws.onclose = function(evt) { 
	console.log('closed') 
}; 
ws.onmessage = function(evt) { 
	console.log(evt.data) 
}; 
ws.onerror = function(evt) { 
	console.log(evt.data) 
};