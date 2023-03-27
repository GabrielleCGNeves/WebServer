
var http = require('http');
var url = require('url');

var callback = function(request, response){
    response.writeHead(200,{"Content-tipe": "text/plain; charset=utf-8"});
    
    var part  = url.parse(request.url);
    if(part.path == "/"){
        response.end("Site Principal");
    }
    
    else if(part.path == "/rota1"){
        response.end("Site do rota1");
    }
    
    else if(part.path == "/rota2"){
        response.end("Site do Rota2");
    }
    
    else{
        response.end("Rota Inválida - 404");
    }
}

var server = http.createServer(callback);
server.listen(3000);
console.log(">>  Server Iniciado");
