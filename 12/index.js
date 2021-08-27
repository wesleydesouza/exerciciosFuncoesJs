function fatorandoNumero(numero){
    if(numero === 0){
        numero = 1;
    }else{
        for(let n = numero-1; n > 1; n--){
            
            numero *= n;  
        }
    }
    console.log(numero);
};

fatorandoNumero(5);