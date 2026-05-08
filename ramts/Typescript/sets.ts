var books= new Set();

books.add('Pride and Prejudice');
books.add('War and peace').add('Oliver Twist');

console.log(books);
console.log('How Many Books', books.size);
console.log('has Oliver Twist', books.has('Oliver Twist'));
books.delete('Oliver Twist');
console.log('has Oliver Twist still?',books.has('Oliver Twist'));

var data =[1,3,4,4,3,2,4,5,4,6,6];
var set = new Set(data);
console.log("data lenght", data.length);
console.log("set lenght",set.size);
console.log(data);
console.log(set);