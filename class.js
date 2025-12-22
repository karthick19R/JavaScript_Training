
//  class vehicle{
//     constructor (model,color){
//         this.model = model,
//         this.color = color
//     }
//     get model_name(){
//         return this.model;
//     }
//  }

//  const suzuki = new vehicle("alt","red");
//  console.log(suzuki);
//  console.log(suzuki instanceof vehicle)
//  console.log(suzuki.model_name)
// try{
//     if(1 == true){
//     throw "1 is true";
// }
// }
// catch(error){
//     console.log(`${error}`)
// }
//  for(const a in suzuki){
//     if(a == "model"){
//         //throw "we can not show you the model";
//         console.log("inside if");  
//     }
//     console.log(a,suzuki[a]);
//  }

//  //console.log()

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    return `Hi, I am ${this.name} and I am ${this.age} years old.`;
  }
}

class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }

  study() {
    return `${this.name} is studying in  ${this.grade}.`;
  }
}
class Teacher extends Person{
    constructor(name,age,specific,exp){
        super(name,age)
        this.specific = specific;
        this.exp = exp;
    }
    introduce(){
        return `Hello, I am ${this.name} and i have ${this.exp} years of experience in ${this.specific} `;
    }
}
const karthick = new Student("karthick",22,"MCA")
console.log(karthick)

const bose = new Teacher("bose",46,"Physics",15)
console.log(super(bose.introduce()))