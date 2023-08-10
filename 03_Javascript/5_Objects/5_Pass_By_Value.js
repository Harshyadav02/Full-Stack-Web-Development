let a = 10;

function m1(a){
    a++
}
m1(a)
console.log(a) //Output 10 not 11 

// Why output is 10 not 11 , because we are passing a primitive variable mean it will have a seprate copy mean the let a is different vaibale and a passed in in function is different variable so there are two a that's why our output is 10 not 11

//This concept is called pass by value 

console.log(m1.a)
