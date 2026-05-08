function createEmail(firstName, purchasePrice){
    var shipping = 5.98;
    console.log(
        ` Hi ${firstName}, Thanks for buying from us!
          Total: ${purchasePrice}  
          Shipping: ${shipping}
          Grand Total: ${purchasePrice + shipping};
        `
    );
}
createEmail('RSM',100);