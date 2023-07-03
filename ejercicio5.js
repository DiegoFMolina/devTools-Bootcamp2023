function drawX(cifra){
    if (cifra % 2 === 0){
        console.log("Usa cifras impares");

    }else {
        for(let f=0; f<cifra; f++){
            for(let d=0; d<=cifra; d++){
                if(f===d || f+d===cifra -1){
                    process.stdout.write("*");
                }else{
                    process.stdout.write(" ");
                }
            }
            console.log("");
        }
    }
}
drawX(11) 