
 class vehicle{
    constructor (model,color){
        this.model = model,
        this.color = color
    }
    get model_name(){
        return this.model;
    }
 }

 const suzuki = new vehicle("alt","red");
 console.log(suzuki);
 console.log(suzuki instanceof vehicle)
 console.log(suzuki.model_name)
try{
    if(1 == true){
    throw "1 is true";
}
}
catch(error){
    console.log(`${error}`)
}
 for(const a in suzuki){
    if(a == "model"){
        //throw "we can not show you the model";
        console.log("inside if");  
    }
    console.log(a,suzuki[a]);
 }

 //console.log()