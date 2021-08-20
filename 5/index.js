function mostrarDinheiro(){
    let valor = 0.1 + 0.2;
    let valorConvertido = `R$ ${valor.toFixed(2).replace(".", ",")}`;

    console.log(valorConvertido);
}
mostrarDinheiro()