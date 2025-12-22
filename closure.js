// function counter(){
//     let count =0;
//     function innercounter(){
//         count++;
//         console.log(count)
//     }
//     return innercounter;
// }

// const incrementCounter = counter();
// incrementCounter()
// incrementCounter()

function createAdvancedCounter() {
  let count = 0;

  return {
    increment: () => ++count,
    decrement: () => --count,
    reset: () => { count = 0; return count; }
  };
}

const counter = createAdvancedCounter();
console.log(counter.increment()); 
console.log(counter.increment()); 
console.log(counter.decrement()); 
console.log(counter.reset());     
