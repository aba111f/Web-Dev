let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
  ];

let readMessage = new WeakMap();
readMessage.set(messages[0], Date.now());
readMessage.set(messages[1], Date.now());

console.log(readMessage.has(messages[0]));
console.log(readMessage.has(messages[2]));

messages.shift();


console.log(readMessage.has(messages[0]));

let some = {};

messages.forEach((message) => {
    if(readMessage.has(message)){
        some[message.text] = readMessage.get(message);
    }
});
console.log(some);