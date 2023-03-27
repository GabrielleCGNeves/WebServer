
var http = require('http');
var url = require('url');
var fs = require('fs');

function readFile(response, file) {
    fs.readFile(file, (err, data) => {
        response.end(data)
    })
}

var callback = function(request, response){
    response.writeHead(200,{"Content-tipe": "application/json"});
    
    var part  = url.parse(request.url);

    if(part.path == "/"){
        response.end("Site Principal");
    }
    
    else if(part.path == "/rota1/cadastro"){
        readFile(response, "cadastro.json");
    }

    else if(part.path == "/rota1/catalogo"){
        readFile(response, "catalogo.json");
    }

    else if(part.path == "/rota1/dados"){
        readFile(response, "dados.json");
    }        

    else if(part.path == "/rota1/site"){
        readFile(response, "index.html");
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
