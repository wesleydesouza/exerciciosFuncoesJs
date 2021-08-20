function calcularAno(ano){
    if(ano <= 0){
        console.log("poem o ano direito porra!");
        return false;
    }else if(ano%4===0){
        console.log("é bissexto");
    }else if(ano%400==0){
        console.log("é bissexto");
    }else if(ano%100===0){
        console.log("nao é bissexto");
    }else{
        console.log("não é bissexto");
    };
    console.log(ano)
};
calcularAno(0);
calcularAno(4);
calcularAno(100);
calcularAno(400);
calcularAno(800);
calcularAno(2020);
calcularAno(2021);