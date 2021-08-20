
function resultadoNota(notaAluno) {
    
    let notaReal = arredondarNota(notaAluno);

       if(notaReal < 40){
           console.log("Reprovado!");
       }else{
           console.log(`Parabens sua nota foi ${notaReal}, aprovado!`);
       }
   };

   function arredondarNota(nota){
    
    if(nota%5 > 2){
        return nota + (5 - nota%5);
    }else{
        return nota;  
    }
};

resultadoNota(100);
resultadoNota(30);
resultadoNota(38);
resultadoNota(88);
resultadoNota(61);

