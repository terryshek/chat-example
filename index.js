var express =require("express");
var app = express();

var http = require("http").createServer(app);
var path = require("path");
var io = require("socket.io").listen(http);

    //, http = require("http").createServer(app)
    //, bodyParser = require("body-parser")
    //, io = require("socket.io").listen(http)
    //, _ = require("underscore");
//Server's port number
//Server's IP address
app.set("ipaddr", "192.168.2.4");

app.set("port", 3000);

//Specify where the static content is
app.use(express.static("public", __dirname + "/public"));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});
//app.use(express.static(path.join(__dirname, 'public')));


io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

//http.listen(3000, function(){
//  console.log('listening on *:3000');
//});
//Start the http server at port and IP defined before

//Start the http server at port and IP defined before
http.listen(app.get("port"), function() {
  console.log("Listen at :" + app.get("port"));
});

