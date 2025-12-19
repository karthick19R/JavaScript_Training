function print(res){
    console.log(res)
}
function printtype(res){
    console.log(`the type is :${typeof(res)}`)
}

//comma operator
//let res=(a=10,b=20,a+b);
//print(res)

//printtype(res)
// trying to delete global variable
// a=null;
// b=null;
// delete global.a
// delete global.b
// print(console.log(globalThis))

// unary operator
// let a =1;
// // pre increment
// print(++a)
// print(a)
// //post increment
// print(a++)
// print(a)

// chaining operator
// let obj = {
//     name : "karthick",
//     education :{
//         ug : "BCA",
//         pg : "MCA"
//     },
//     message (){console.log("hello")

//     }
// }

// print(obj.education.pg)
// print(obj.name.first)
// print(obj.education.name?.first)
// print(obj.education?.pg)
//printtype(obj.education.name?.first)
// printtype(obj.education.pg)
// printtype(
//     obj.education
// )
// printtype(print)
// //print(obj.mess()) // this gives error
// print(obj.message())
// print(obj.mess?.()) // this does not give error and return undefined 


// nullish coalescing operator

let a = null;
//let a =10;
let b = a?? "10";
printtype(a); // a is object ??
printtype(b) // b is string

//void operator
let ae = void(0);
print(ae);
printtype(ae);

//logical assignment operator
// let a =0;
// //a||=5; // 5 if a = 1 then it will assogn 1
// a&&= 10; // 0 if a is truth then assign the right value
// a??=20 // only assign if a is null or undefined
// print(a)
// printtype(a)

//optional call
const fn = function () {
    print("hello")
}
fn?.() 
const fun = null;
fun?.() // does not show error