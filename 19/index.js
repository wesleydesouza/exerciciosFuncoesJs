function calcularPreco(codigo, quantidade) {
    switch (codigo) {
        case 100:
            return `pedido: Cachorro Quente, valor total R$ ${(quantidade*3).toFixed(2).replace(".",",")}.`;
        case 200:
            return `pedido: Hambúrguer Simples, valor total R$ ${(quantidade*4).toFixed(2).replace(".",",")}.`;
        case 300:
            return `pedido: Cheeseburguer, valor total R$ ${(quantidade*5.5).toFixed(2).replace(".",",")}.`;
        case 400:
            return `pedido: Bauru, valor total R$ ${(quantidade*7.5).toFixed(2).replace(".",",")}.`;
        case 500:
            return `pedido: Refrigerante, valor total R$ ${(quantidade*3.5).toFixed(2).replace(".",",")}.`;
        case 600:
            return `pedido: Suco, valor total R$ ${(quantidade*2.8).toFixed(2).replace(".",",")}.`;
        default:
            return "produto não existetente!";
    }
};

console.log(calcularPreco(100, 1));
console.log(calcularPreco(200, 2));
console.log(calcularPreco(300, 3));
console.log(calcularPreco(400, 4));
console.log(calcularPreco(500, 5));
console.log(calcularPreco(600, 06));
console.log(calcularPreco(700, 10));
