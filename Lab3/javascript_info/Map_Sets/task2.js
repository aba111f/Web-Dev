let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];


function aclean(arr){
    let myMap = new Map();
    for(let i = 1; i <= arr.length; i += 2) {
        myMap.set(arr[i - 1], arr[i]);
        
    }
    arr.length = 0;
    myMap.forEach((value, key) => {
        let elem1 = String(key);
        let elem2 = String(value);
        if(elem2 === "undefined"){
            return;
        }
        else if(elem1.size == elem2.size){
            arr.push(elem1);
        }
        else{
            arr.push(key, value);
        }
    });

    return arr;
}
console.log( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"