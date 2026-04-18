class addition{
    a : number;
    b : number;
    c : number;
     
    initdata(){
        this.a = 20;
        this.b = 30;
    }

    addData(){
        this.c = this.a + this.b;
    }

    printData(){
        console.log(this.c);
    }
}

let add =new addition();
add.initdata();
add.addData();
add.printData();
