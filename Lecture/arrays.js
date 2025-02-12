let myArr = [1, 2, 3, 4, 5];
console.log(myArr);
let myArr2 = myArr.map(incOne);

myArr.forEach((element, index, arr) => {
    element++;
    arr[index] = element;
});


console.log(myArr);
console.log(myArr2);

function incOne(element){
    return element + 1;
}