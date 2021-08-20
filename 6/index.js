function jurosSimples(capitalInicial, taxaJuros, tempoAplicacao) {
    let juros = (capitalInicial * taxaJuros/100 * tempoAplicacao);
    let montante = capitalInicial + juros;
    console.log(`Seu juros simples é de: R$${montante.toFixed(2)}`);
}

function jurosCompostos(capitalInicial, taxaJuros, tempoAplicacao) {
    let montante = capitalInicial*(Math.pow((1 + taxaJuros/100), tempoAplicacao));
   
    console.log(`Seu juros composto é de: R$${montante.toFixed(1)}`);
}

jurosSimples(100, 10, 2);
jurosCompostos(100, 10, 2);