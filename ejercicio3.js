
function countNameRepetitions(names) {
    let conteo = {};
    for (const f of names) {
        if(conteo [f]) {
            conteo[f] += "*"
        }else {
            conteo[f] = "*";
        }
        
    }
    return conteo;
}

let nombres = ["Nicolas","Diego", "Paola","Sara","Nicolas", "Paola","Diego","Paola","Daniel", "Sara","Paola","Nicolas"]
console.log(countNameRepetitions(nombres));
