function imprimirNotas(valor) {
    let contarNota100 = 0;
    let contarNota50 = 0;
    let contarNota20 = 0;
    let contarNota10 = 0;
    let contarNota5 = 0;
    let contarNota1 = 0;
    
    while(valor >= 100 || valor >= 50 || valor >= 20 || valor >= 10 || valor >= 5 || valor >= 1){
        if(valor >= 100){
            valor -= 100;
            contarNota100++;
        }else if(valor >= 50){
            valor -= 50;
            contarNota50++;
        }else if(valor >= 20){
            valor -= 20;
            contarNota20++;
        }else if(valor >= 10){
            valor -= 10;
            contarNota10++;
        }else if(valor >= 5){
            valor -= 5;
            contarNota5++;
        }else if(valor >= 1){
            valor -= 1;
            contarNota1++;
        }
    };
    console.log(`total de notas R$100: ${contarNota100}\ntotal de notas R$50: ${contarNota50}\ntotal de notas R$20: ${contarNota20}\ntotal de notas R$10: ${contarNota10}\ntotal de notas R$5: ${contarNota5}\ntotal de notas R$1: ${contarNota1}`);
};

imprimirNotas(286);
