let pontuacoes = [10, 20, 20, 8, 25, 3, 0,30, 1];

function verPontuacoes(lista) {

    let melhorPontuacoes = lista[0];
    let qntRecorde = 0
    let piorPontuacao = lista[0];
    let piorJogo = 1;
    for(let i = 1; i < lista.length; i++){
        if(lista[i] > melhorPontuacoes ){
            melhorPontuacoes = lista[i];
            qntRecorde++;  
        }else if(lista[i] < piorPontuacao){
            piorPontuacao = lista[i];
            piorJogo = i+1;
        };
    };
    return lista = [qntRecorde, piorJogo];
};

console.log(verPontuacoes(pontuacoes));