console.log("Hello Word");

var desconto = 10;
var produto = 100;

var calcFunction =  require("./modules/calc.js");

var saida = calcFunction(produto,desconto);

console.log("Valor final do produto: "+saida);