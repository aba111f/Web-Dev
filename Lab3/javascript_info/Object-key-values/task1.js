let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };


function sumSalaries(salaries) {
    let sum = 0;
    if(salaries.size === 0) return;
    for(let value of Object.values(salaries)){
        sum += value;
    }       
    return sum;
}
  
  console.log( sumSalaries(salaries) ); // 650