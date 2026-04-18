var cats = ["Tabby", "Siamese", "persion"];

var dogs = ["Golden Retriever", "Pug", "Schnauzer"];

// var animal = ["Whale", "Girffe", cats, " Snake", dogs, "Coyote"];

// use spread operator

var animal = ["Whale", "Girffe", ...cats, " Snake", ...dogs, "Coyote"];

console.log(animal);
