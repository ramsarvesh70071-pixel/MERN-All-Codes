"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class addition {
    a;
    b;
    c;
    initdata() {
        this.a = 20;
        this.b = 30;
    }
    addData() {
        this.c = this.a + this.b;
    }
    printData() {
        console.log(this.c);
    }
}
let add = new addition();
add.initdata();
add.addData();
add.printData();
//# sourceMappingURL=1-addition.js.map