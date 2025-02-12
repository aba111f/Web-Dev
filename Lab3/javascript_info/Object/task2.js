obj = {};


function isEmpty(obj){
    for(let key in obj){
        return false;
    }
    return true;
}

console.log(isEmpty(obj));

obj["some"] = 13;
console.log(isEmpty(obj));