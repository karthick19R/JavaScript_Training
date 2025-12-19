const { isArray } = require("lodash");
function print(result){
    console.log(`result :${result}`);
    console.log(`type of the result : ${typeof(result)}`);
    // function type(){
    //     console.log(Object.prototype.toString.call(result))
    // }
}

const arr =[1,4,2,3,6]
// console.log(arr);
// console.log(typeof(arr))
// console.log(isArray(arr))
// console.log(arr instanceof Array)

const arr2 = [...arr];
// console.log(typeof(arr2));
// console.log([...arr])
// let a = 100;
// console.log(typeof(a))
let obj = {
    name :"karthick",
    num : 10
}

print(Object.prototype.toString.call(obj))
myfun(2,4,7);
let obj2 = {...obj}
obj2.name ="Ram";

print(obj)
print(obj2)
print(Object.prototype.toString.call(obj))
/*
{ name: 'karthick', num: 10 }
{ name: 'Ram', num: 10 }
 [object Object]
 */
function myfun(a,b,c,m){
    print("inside function myfun")
    print(typeof(a));
    print(typeof(b));
    print(typeof(c));
    print(typeof(m));
    print("myfun ended")
    console.log(
        a*b*c*m
    )
}

let obj3 ={...arr2}
print(obj3);
print(Object.prototype.toString.call(obj3))
//{ '0': 1, '1': 4, '2': 2, '3': 3, '4': 6 }
//[object Object]

