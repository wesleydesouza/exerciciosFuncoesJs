function identificadorTriangulo(lado1, lado2, lado3) {
    if(lado1 == lado2 && lado1 == lado3 && lado2 == lado3){
        console.log("é um equilatátero!!");
    }else if(lado1 == lado2 || lado1 == lado3 || lado2 == lado3){
        console.log("é um Isósceles!!");
    }else{
        console.log("é um Escaleno!!");
    }
}
identificadorTriangulo(1, 1 ,1);
identificadorTriangulo(2, 1 ,2);
identificadorTriangulo(2, 1 ,3);