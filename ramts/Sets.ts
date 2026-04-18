var books = new Set();
books.add(`pride and prejudice`);
books.add (`war and peace`)
.add('oliver Twist');

console.log(books);

console.log('how many books ?', books.size);
console.log('has oliver Twist?', books.has('oliver Twist'));
books.delete('oliver Twist');
console.log('has oliver Twist still ?', books.has('oliver Twist'));

var data = [4,5,5,1,1,1,5,5,4,85,65,2];
var set = new Set(data);
console.log('Data Length',data.length);
console.log('Set Size',set.size);
console.log(set);
