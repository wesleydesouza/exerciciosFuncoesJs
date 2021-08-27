function calcularConta(numero1, operador, numero2){
    switch(operador){
        case "+":
            return numero1 + numero2;
        case "-":
            return numero1 - numero2;
        case "*":
            return numero1 * numero2;
        case "/":
            return numero1 / numero2;
        default:
            return "operações inválidas";
    }
};

console.log(calcularConta(1, "+", 2));