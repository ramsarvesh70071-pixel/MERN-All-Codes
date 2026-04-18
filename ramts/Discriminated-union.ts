interface Employee{
    empName:string,
    empCode:string,
    empSalary:number
};

interface Vendor{
    VendorName:string,
    VendorCode:string,
    VendorSalary:number
};

interface Visitor{
    VisitorName:string,
    VisitorCode:string,
    VisitorSalary:number
};

// non-discriminited union

type P = Employee | Vendor | Visitor;


// let Person : P;

// Person = {
//     empName:'RSM',
//     empCode:'E1011',
//     empSalary:900999999999
// }


// ================================================================


// interface Employee{
//     type: 'EMPLOYEE',
//     empName:string,
//     empCode:string,
//     empSalary:number
// };

// interface Vendor{
//     type: 'VENDOR',
//     VendorName:string,
//     VendorCode:string,
//     VendorSalary:number
// };

// interface Visitor{
//     type: 'VISITOR',
//     VisitorName:string,
//     VisitorCode:string,
//     VisitorSalary:number
// };


// // discrimineted union

// type person = Employee | Vendor | Visitor;


// let p : person;

// p = {
//     type: 'EMPLOYEE',
//     empName:'RSM',
//     empCode:'E1011',
//     empSalary:900999999999
// }

// //               OR

// // p.type = 'Employee'




// function AllowRestrictedArea(p : person){
//     if(p.type == 'EMPLOYEE'){

//     console.log("Visit the Employee Department");
//     return true;
// }

// if(p.type == 'VENDOR'){

//     console.log("Visit the HR Department");
//     return true;
// }

// if(p.type == 'VISITOR'){

//     console.log("Visit the Billing Department");
//     return true;
// }
// }

// let person : Employee = {
//     type:'EMPLOYEE',
//     empCode:'766',
//     empName: 'RSM'
// }

// AllowRestrictedArea(person);