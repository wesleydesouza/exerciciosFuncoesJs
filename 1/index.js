function calculator(valor1, valor2){
    let soma = parseFloat(valor1 + valor2);
    let subtracao = parseFloat(valor1 - valor2);
    let multiplicacao = parseFloat(valor1 * valor2);
    let divisao = parseFloat(valor1 / valor2);

    console.log(soma);
    console.log(subtracao);
    console.log(multiplicacao);
    console.log(divisao);
}

calculator(10, 100);