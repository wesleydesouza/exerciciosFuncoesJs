function pedirFruta(fruta){
    switch(fruta){
        case "maçã":
            return "Não vendemos esta fruta aqui";
        case "kiwi":
            return "Estamos com escassez de kiwis";
        case "melancia":
            return "Aqui está, são 3 reais o quilo";
        default:
            return "Fruta inválida";
    }
}

console.log(pedirFruta("maçã"));