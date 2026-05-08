function createEmail(firstName, purchasePrice) {
    var shipping = 5.98;
    console.log(" Hi ".concat(firstName, ", Thanks for buying from us!\n          Total: ").concat(purchasePrice, "  \n          Shipping: ").concat(shipping, "\n          Grand Total: ").concat(purchasePrice + shipping, ";\n        "));
}
createEmail('RSM', 100);
