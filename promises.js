const { get } = require("lodash");

function getid(id){

    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            if(Math.random() > 5){reject("No id found")}
            else{
                resolve({id : 1});
            }
        },9000)
    });
}

function getname(id){
    return new Promise( (resolve,reject) => {
        setTimeout(() => {
            if(Math.random() > 5 ){
                reject("Name not availabel");
            }
            else{
                resolve({name : "karthick"})
            }
        },2000)
    })
}

// getid(1).then(res => {
//     console.log(res);
//     console.log(typeof(res))
// }).then(num => {
//     console.log(num.name,res.id);
// }).catch(err =>{
//     console.log("error occured");})

async function fetchvalue(id){
    try{
    console.log("Inside async function")
    let o_id = await getid(id)
    let name = await getname(id)
    console.log(o_id,name)
    console.log("Async function completed")
    }
    catch(error){
        console.log("inside error")
        console.log(error.name)
    }
}
//fetchvalue(1)
Promise.all([getid(1),getname(1)]).then((res) => {
    console.log(res)
}).catch(err=>{
    console.log("Error in promise all")
})


// Promise.allSettled([getid(1),getname(1)]).then((res) => {
//     console.log(res)
// }).catch(err=>{
//     console.log("Error in promised allsettled")
// })

// Promise.race([getid(1),getname(1)]).then((res) => {
//     console.log(res)
// }).catch(err=>{
//     console.log("Error in promised allsettled")
// })

let obj = null;
const a = null;
console.log("a")
console.log(a)
console.log("obj")
console.log(obj);
console.log(typeof(obj))