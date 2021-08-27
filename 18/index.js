function lerNumero(numero) {
    switch (numero) {
        case 0:
            return "número zero";
        case 1:
            return "número um";
        case 2:
            return "número dois";
        case 3:
            return "número tres";
        case 4:
            return "número quatro";
        case 5:
            return "número cinco";
        case 6:
            return "número seis";
        case 7:
            return "número sete";
        case 8:
            return "número oito";
        case 9:
            return "número nove";
        case 10:
            return "número dez";
        default:
            return "número inválido";
    }
};

console.log(lerNumero(0));
console.log(lerNumero(1));
console.log(lerNumero(2));
console.log(lerNumero(3));
console.log(lerNumero(4));
console.log(lerNumero(5));
console.log(lerNumero(6));
console.log(lerNumero(7));
console.log(lerNumero(8));
console.log(lerNumero(9));
console.log(lerNumero(10));
console.log(lerNumero(11));