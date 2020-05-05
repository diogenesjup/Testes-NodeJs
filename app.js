/*
console.log("Hello Word");

var desconto = 10;
var produto = 100;

var calcFunction =  require("./modules/calc.js");

var saida = calcFunction(produto,desconto);

console.log("Valor final do produto: "+saida);
*/



/*
var http = require('http');

http.createServer(function(req, res){
  
   res.end("Valor final do produto no server: "+saida);

}).listen(8081);

*/

const express = require("express");

const app = express();

app.get("/",function(req, res){
   res.send("Página principal");
})

app.get("/contato",function(req, res){
   res.sendFile(__dirname+"/src/index.html");
})

// PARA CHAMAR ARQUIVOS CSS E JS
app.use(express.static(__dirname + '/src'));


app.listen(8081);