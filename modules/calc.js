var proc = function(valorProduto,valorDesconto){
   
   valorProduto = valorProduto - valorDesconto;

   return  valorProduto;

}

module.exports = proc;