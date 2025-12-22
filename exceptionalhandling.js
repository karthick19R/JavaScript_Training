class makeerror extends Error{
    constructor(message){
        super(message)
    this.name = "user error";
}
}
//let name = "karthick"
let name =""
try{
    if (name){
        console.log("yeah, you are karthick")
    }
    else{
        throw new makeerror("Validation failed")
    }
}catch(error){
    console.log("YOu are not karthick");
    console.log(error.name)
    console.log(error .message)
    console.log(error)
}