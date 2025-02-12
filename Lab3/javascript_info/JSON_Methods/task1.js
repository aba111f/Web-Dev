let user = {
    name: "John Smith",
    age: 35
  };

user = JSON.stringify(user);
console.log(user);
user = JSON.parse(user);
console.log(user);