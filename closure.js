function counter(){
    let count =0;
    function innercounter(){
        count++;
        console.log(count)
    }
    return innercounter;
}

const incrementCounter = counter();
incrementCounter()
incrementCounter()