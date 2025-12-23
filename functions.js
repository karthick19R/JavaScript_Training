function print(head="come guys",tail = "world"){
    console.log(head,tail)
}

//print("hello","aliens")

let check = print;
check("lets have fun");
print();

const arr =["ram","mani","gowtham","sekhar"]
arr.forEach((ar) => console.log(ar))

arr.forEach(function(ar){
    console.log(ar)
})

arr.forEach(console.log)
/* ram 0 [ 'ram', 'mani', 'gowtham', 'sekhar' ]
mani 1 [ 'ram', 'mani', 'gowtham', 'sekhar' ]
gowtham 2 [ 'ram', 'mani', 'gowtham', 'sekhar' ]
sekhar 3 [ 'ram', 'mani', 'gowtham', 'sekhar' ] */