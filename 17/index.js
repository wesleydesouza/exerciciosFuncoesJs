function calcularAlmento (plano, salario) {
    function falar(salario){
        console.log(`seu novo salário será: ${salario}`);
    }

    switch(plano){
        case "a":
           salario = (salario*10)/100;
           falar(salario);
           break;
        case "b":
            salario = (salario*15)/100;
            falar(salario);
            break;
        case "c":
            salario = (salario*20)/100;
            falar(salario);
            break;
        default:
            return "Plano inválido!";
        
    }

};

calcularAlmento("a", 1500);