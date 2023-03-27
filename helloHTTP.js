
const http = require('http');

var callback = function(request, response){
    response.writeHead(200,{"Content-tipe": "text/plain"});
    response.end("Testando FATEC - Zona Sul");
}

var server = http.createServer(callback);
server.listen(3000);
console.log(">>  Server Iniciado");
