"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SimpleIntrest {
    p;
    r;
    t;
    si;
    initdata() {
        this.p = 2000;
        this.r = 1.56;
        this.t = 2;
    }
    calData() {
        this.si = (this.p * this.r * this.t) / 100;
    }
    printData() {
        console.log("simple interest", this.si);
    }
}
let calIntrest = new SimpleIntrest();
calIntrest.initdata();
calIntrest.calData();
calIntrest.printData();
//# sourceMappingURL=2-Calculate-SI.js.map