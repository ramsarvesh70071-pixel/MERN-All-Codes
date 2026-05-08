//Here the (...) is the spread operator
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var cats = ['Tabby', 'Siemese', 'parsian'];
var dogs = ['Ginni', 'shaaki', 'Tom', 'Tiger'];
var animal = __spreadArray(__spreadArray(__spreadArray(__spreadArray(['Cow', 'Whale'], dogs, true), ['Horse'], false), cats, true), ['Monkey'], false);
console.log(animal);
