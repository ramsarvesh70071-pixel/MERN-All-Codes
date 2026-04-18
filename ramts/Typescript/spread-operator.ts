//Here the (...) is the spread operator

let cats =['Tabby', 'Siemese', 'parsian'];
let dogs =['Ginni','shaaki', 'Tom', 'Tiger'];
let animal = ['Cow', 'Whale', ...dogs, 'Horse', ...cats, 'Monkey'];
console.log(animal);