var a = 4;

console.log(a, typeof(a));

console.log(2 == 2); // true
console.log(2 == '2'); // true
console.log(2 === '2'); // false

var obj = {
    'id': '234223',
    'name': 'jfalefa',
}
console.log(obj, typeof(obj));

var newobj = JSON.stringify(obj);
console.log(newobj, typeof(newobj));

var arr = [1, 2, 3, 4];
arr.push(23423); // adding elem to array
arr.pop(); // delete elem from array


console.log(arr);





// loop 1
for(var b = 0; b < arr.length; b++){
    console.log(arr[b]);
}


// loop 2
for(const num of arr){
    console.log(num);
}


//loop 3
arr.forEach(function(num, index){//anonymous function
    
    console.log((num+index)**num , index);
})

var num;
// function print(num) {
//     console.log(num);
// }

// arr.forEach(print(num));



// functions
arr.sort();
console.log(arr);


console.log(arr.find((number) => number > 3));

var newArr = arr.map(function (number, index) { // option 1
    return number * index;
})


console.log(newArr);

var newErr = arr.map((num, ind) => num*ind);  // option 2

console.log(newErr);


console.log(arr.slice(2, 4)); // subarray

console.log(arr);
var changearr = arr.splice(1, 3, 2);
console.log(changearr);


const myh = document.getElementById('myh');
// const some = document.getElementsByClassName();
const h1 = document.getElementsByTagName('h1');
myh.innerText = 'MY new Text';
myh.style.color = 'red';


alert('psfesa');
confirm('faefa');