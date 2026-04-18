function ristectedarea(person) {
    if (person.type == 'EMPLOYEE') {
        console.log('Visit Employee department');
    }
    if (person.type == 'VENDOR') {
        console.log('Visit the billing dept.');
    }
    if (person.type == 'VISITOR') {
        console.log('Visit the HR dept.');
    }
}
var person = {
    type: 'VENDOR',
    vendorcode: 'ES121',
    name: 'John'
};
ristectedarea(person);
// interface employee {
//     type:'Employee'
//     empname:string,
//     empcode:string,
//     empsal:number
// };
// interface vendor {
//     type:'vendor';
//     vendorname:string,
//     vendorcode:string,
//     vendorincome:number
// };
// interface visitor {
//     type:'visitor';
//     visitorname:string,
//     visitorcode:string,
//     visitorsal:number
// };
// type person = employee | vendor | visitor
// // whether person is discriminated or not
// let p: person;
// // p={
// //     type:'vendor',
// //     vendorcode :'AA12',
// //     vendorname : 'john',
// //     vendorincome : 10000
// // }
// if(p.type=='employee'){
//     console.log('Visit the Employee department');
// }
// if(p.type=='vendor'){
//     console.log('Visit the billing department');
// }
// if(p.type=='visitor'){
//     console.log('visit the HR department');
// }
