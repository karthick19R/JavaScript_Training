// // console.log("let's Start");
// // console.log(a);
// // var a = 10;
// // console.log(typeof(a));
// console.log(a);
// var a;
// const bi = 123n;
// console.log(typeof(bi));

const { rest, reject } = require("lodash");

// /// objects
let person ={
    name : 'karthick',
    age : 22,
    country : 'India',
    State : 'Tamil Nadu',
    vote : function() {
        return (this.country =='India') ? 
                (this.State == "Tamil Nadu") ? (this.age > 17) ? (console.log(`${this.name} , you can vote `),true) : (console.log("You should grow up") ,false) 
                : (console.log(`${this.name} , you should live in TamilNadu`),false):
                (console.log(`${this.name} , you need to be an indian`),false);
                },
    get fullname() {
        return this.name;
    }
};

console.log(person.vote());
const person2 = Object.create(person);
person2.age = 17;
person2.country = "England";
console.log(person);
console.log(person2);

console.log(person2.vote());
console.log(person2.country);
console.log(person.country);

delete person2.country;
console.log(`Trying to delete object value`);
console.log(person2);
console.log(person2.vote());
console.log(person2.country);
console.log(person.country);

//deleting from the parent 
delete person.country;
console.log(`Trying to delete parent object value`);
console.log(person);
console.log(person2.country);
console.log(person2.vote());


 // try to copy objects
console.log(`trying to copy objects`);
let person3 = person;
person3.name = 'jero';
console.log(person);
console.log(person3);
 /* so copying the variable name make both of them to share same refernce so change in one 
 object will affect other */

 console.log(Object.keys(person));
 console.log(Object.values(person2));

 for(let x in person){
     console.log(`${x} and the value is ${person[x]}`)
 }
 console.log(person);
 console.log(person2);
 console.log("checking is country present in person2");
 console.log('State' in person2);
 console.log(person2.hasOwnProperty("State"));
 console.log();
 console.log(person);
 console.log(person2);
 
 Object.freeze(person2);
 person2.country = "England";
 person.country ="India";
 delete person2.age;
 console.log(person);
 console.log(person2);

 //copyinh objects
 console.log(`creating person4 by copying from person object`);
 let person4 = {...person};
 console.log(person4);
 person4.name = "ram";
 console.log(person);
 console.log(person4);

 const _ = require('lodash');
 const person5 = _.cloneDeep(person);
 // changing the property of the object
 console.log(person5);
 Object.defineProperty(person5,"name",{
                 writable : false,
                 value : "Darwin"
             });
 person5.name = "Hello";
 console.log(person5);

console.log(`${person.name} , i am the person 1`);
console.log(`${person2.name} hello i am  person 2`);
//person2.name = "Mani";
console.log(`person1 : ${person}`);
console.log(`person2 : ${person2}`);
console.log(`${person.name} , i am the person 1`);
console.log(`${person2.name} hello i am person 2`);
person.height = 170;
console.log(person);
console.log(person2);

let sum =0;
for(let i =0 ;i<5;i++){
     sum += i;
      console.log(sum);
 }
 console.log(`sum : ${sum}`);

//deconstruction

console.log(Object.getOwnPropertyDescriptors(person))
console.log(Object.getOwnPropertyDescriptor(person,"name"))
console.log("person2 details")
console.log(Object.getOwnPropertyNames(person))

// destructuring
//let {property : variable name} =object 
let gang ={
    name :"Block Busters",
    intiated : 2021
}
let {name1:game} = gang
console.log(game)