function unique(arr) {
    let distinctValues = new Set(arr);
    return distinctValues;
  }
  
  let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
  
  console.log( unique(values) ); // Hare, Krishna, :-O