// Holds key value pairs.
// any type can used as key.

var courses = new Map();
courses.set("react", {decrioption: "ui"});
courses.set("express", {description : "Server"});

// tsc -target "Es6" file name

console.log(courses);

console.log(courses.get('react'));
