let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
  ];

let readMessage = new WeakSet();
var i = 0;
while(i < messages.length - 1){
    readMessage.add(messages[i]);
    i++;
}

console.log(readMessage.has(messages[0])); // true readed
console.log(readMessage.has(messages[2])); // false not readed

messages.shift();

console.log(readMessage.has(messages[0])); // must be deleted in readMessages also