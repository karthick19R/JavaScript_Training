// const arr = ["bmw","audi","RR","MS"];
// //const arr =new Array(40);
//  console.log(arr.join("*"));
//  console.log(arr.toString())
//  console.log(arr)
//  console.log(typeof(arr))
//  console.log(Array.isArray(arr));
//  console.log(arr instanceof Array)
//  arr.pop();
//  console.log(arr)
//  console.log(arr.shift());
//  console.log(arr);
//  console.log(arr.unshift("bmw"));
//  console.log(arr);
//   const arr2 = [1,3,4,5];
//   const arr20 = [...arr2];
//  const arr3 = arr.concat(arr2);
//  console.log(arr3);
//  const arr4 = [[1,2],[3,4],[5,6],[7.8]]
//  const arr5 = arr4.flat();
//  console.log(`flated after : ${arr5}`);
// arr2.splice(1,0,44,55,66);
// console.log(arr2);
// console.log(arr2.slice(1,3));
// console.log(arr2);
// console.log(arr2.indexOf(44))
// console.log(arr2.includes(44));
// console.log(arr2.sort(function (a,b){ return a-b}));

// arr2.forEach((cur,i,arr) => { console.log(arr2[i])})
// const arr8 = arr2.map(myfun);
// function myfun(value,index,array){
// return [value,value*2];
//  }
//  const arr9 =arr8.flat()
//  const arr10 = arr9.filter((value) => value<18);
//  console.log(arr10);

//  const arr11 = [...arr10];
//  arr11[1] = 10;
//  console.log(arr11);
//  console.log(arr10);
//  console.log(arr10.constructor);
//  {
//      const arr11 =[0,10];
//      console.log(arr11)
//  }
//  console.log(arr11)
//  console.log(arr10 instanceof Set)

//  console.log(arr11.toString());
//  let x,y,z;
//  y = "hello";
//  try{
//      console.log(x," operation successful") ;throw "not defined";
//  }
//  catch(err){
//      console.log(`${err.name} inside catch`)
//  }finally{
//      console.log("completed");
//  }

//  let f = this;
//  console.log(f);

//  const vehicle ={
//      name : "car" ,
//      run : function (){
//          return `${this.name} run fastly`;
//      }
//  }
//  const bmw ={
//      name : "BMW"
//  }

//  let result = vehicle.run.call(bmw);
//  console.log(result);

// let res = vehicle.run.bind(bmw);
// console.log(res());
//  a =10 ;
// console.log(typeof(a));

// //Destructuring

// const fruits = ["Bananas", "Oranges", "Apples", "Mangos"];
// let {[0]:fruit1 ,[1]:fruit2,...balance} = fruits;
// console.log(fruit1,fruit2,balance);
// [fruit1,fruit2] = [fruit2,fruit1];
// console.log(fruit1,fruit2,balance);

function print(res){
    console.log(res)
}
function printtype(res){
    console.log(`the type is :${typeof(res)}`)
}

arr = [1,3,2,4,2]
print(arr.reduce((sum,Element) => {
    return sum+Element;
},10))

n_arr =[1,[3,4],[5,7]]
print(n_arr.reduce((arg,ele) => {
    if(ele instanceof Array){
        return [...arg,...ele];
    }else
    {
        return [...arg,ele]
    }
    
},[]))