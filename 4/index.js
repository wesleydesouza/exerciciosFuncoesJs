function dividendoDivisor (valor1, valor2) {
    let resultadoDividendo = parseFloat(valor1 % valor2);
    let resultadoDivisor = parseFloat(valor1 / valor2);

    console.log(resultadoDividendo);
    console.log(resultadoDivisor);
}

dividendoDivisor (10, 5);