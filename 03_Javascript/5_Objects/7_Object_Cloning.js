// object cloning can be done by 3 ways:

    // 1) iterstion 
    // 2) Assign 
    // 3) Spread 

// By Iteration 

let x = {
    value : 10,
}
// creating an empty object
let y={}
for(let key in x){
     y[key] = x[key]
}
console.log('X object value is ',x)
console.log('Y object value is ',y)

//Using Assign function
let z = Object.assign({},x)
console.log('Z object value is ',z)

//By Spread Operator

let g = {...x}
console.log('G object value is ',g)