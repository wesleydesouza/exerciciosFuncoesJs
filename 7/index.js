function bhaskara (a, b ,c){
  
    let delta = Math.pow(b, 2) - 4*a*c;
    let x1 = (-b+Math.sqrt(delta))/(2*a);
    let x2 = (-b-Math.sqrt(delta))/(2*a);

    if(delta<0){
        console.log("o delta é negativo!");
    }else{
        console.log(`x1: ${x1} \n x2: ${x2} \n delta: ${delta}`);
    };
};

bhaskara(3, -5, 12);