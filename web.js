/* Startup engine */


var app = express.createServer(express.logger());

app.get('/', function(request,response) {
    var fs = require('fs');

var buf = new Buffer(fs.readFileSync(__dirname + '\/index.html'),'utf-8');
response.send(buf.toString());
});
var port = process.env.PORT;
app.listen(port, function() {
    console.log("Listening on " + port);
}).listen(process.env.PORT, process.env.IP);
