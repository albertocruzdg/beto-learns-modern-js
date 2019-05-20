var list = [54,2,13,55,3,256,1,34234,5];

console.log("Original: \t" + list);

for (let i = 0; i < list.length; i++) {

    for (let j = 0; j < list.length - i; j++) {
        
        if (list[j] > list[j + 1]) {
            
            let aux = list[j];
            
            list[j] = list[j + 1];
            
            list[j + 1] = aux;
        }

        console.log("Loop " + i + "-" + j + ": \t" + list);
    }
}

console.log(list);