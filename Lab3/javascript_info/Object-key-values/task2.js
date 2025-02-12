let user = {
    name: 'John',
    age: 30
  };


function count(user) {
    let counter = 0;
    if(user.size === 0) return;
    for(let key of Object.keys(user)){
        if(key) counter++;
    }
    return counter;
}
  
  console.log( count(user) ); // 2