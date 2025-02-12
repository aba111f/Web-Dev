let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };

function topSalary(salaries){
    let max = 0;
    let [...rest] = Object.values(salaries);
    max = Math.max(...rest);
    console.log(max);
    
}

topSalary(salaries);