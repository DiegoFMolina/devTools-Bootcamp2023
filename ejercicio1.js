function next_pal(val) {
    for (let i = val + 1; ; i++) {
        if (String(i) == String(i).split("").reverse().join("")) {
             console.log(i);
        return i;
       
        }
    }
}

next_pal(77)