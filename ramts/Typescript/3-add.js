var Addition = /** @class */ (function () {
    // initdata(){
    //     this.a=29;
    //     this.b=54;
    // }
    function Addition() {
        this.a = 0;
        this.b = 0;
        this.c = 0;
        this.a = 29;
        this.b = 54;
    }
    Addition.prototype.caldata = function () {
        this.c = this.a + this.b;
    };
    Addition.prototype.printdata = function () {
        console.log("The sum of given number is: ".concat(this.c));
    };
    return Addition;
}());
var add = new Addition();
// add.initdata();
add.caldata();
add.printdata();
