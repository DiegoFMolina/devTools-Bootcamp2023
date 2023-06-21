for(let f = 1; f <= 100; f++) {
    let result ="";
    if(f % 3 == 0){
        result += "Fizz";
    }
    if(f % 5 == 0){
        result += "Buzz"
    }
    console.log(result || f);
}