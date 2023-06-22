let a = {
    value :10,
};

function m1(a){
    a.value ++ ;
}
m1(a)
console.log(a.value)
 
// Why output is  11 , because we are passing a Reference variable mean it will have a single copy so the value will get affected 
//This concept is called pass by Reference