var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var cats = ["Tabby", "Siamese", "persion"];
var dogs = ["Golden Retriever", "Pug", "Schnauzer"];
var animal = __spreadArray(__spreadArray(__spreadArray(__spreadArray(["Whale", "Girffe"], cats, true), [" Snake"], false), dogs, true), ["Coyote"], false);
console.log(animal);
