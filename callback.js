function processNumbers( arr , callback){
     arr.forEach(element => {
         callback(element);
     });
  }

  function printingsquare(num){
     console.log(num ** 2)
  }
  function printingcube(num){
     console.log(Math.pow(num,3))
  }
  processNumbers([1,4,2,6,3],printingsquare);
  processNumbers([1,4,2,6,3],printingcube);

  setInterval(() => {console.log(new Date())
    
  }, 2000);
