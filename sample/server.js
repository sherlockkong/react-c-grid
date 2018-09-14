var express = require('express');
var compression = require('compression');
var app = express();
var path = require('path');

app.set('port', 9898);
app.use(compression());
app.use(express.static(path.join(__dirname, '/public')));
app.get(/(?<!\.json)$/, function (req, res) {
	res.sendFile(path.join(__dirname, process.env.NODE_ENV === 'development' ? '/debug.html' : '/index.html'));
});
app.listen(app.get('port'), function () {
	console.log("Node app is running at localhost:" + app.get('port'))
});

