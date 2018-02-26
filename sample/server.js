var express = require('express')
var app = express()
var path = require('path')

app.set('port', 9898)
app.use(express.static(path.join(__dirname, '/public')))
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/public/index.html'))
})

app.listen(app.get('port'), function () {
  console.log("Node app is running at localhost:" + app.get('port'))
})