// By for in loop we can iterate in objects we can access key as well as value

let rectangle = {
    length :2,
    breadth : 4,
}

for(let key in rectangle){
    console.log(key,rectangle[key]);
}
//key,===> KEY
//Value ======> rectangle[key]

//TO check wheather the key is present or not

if('length' in rectangle){
    console.log('Present')
}
else{
    console.log('Not Present')
}

if('color' in rectangle){
    console.log('Present')
}
else{
    console.log('Not Present')
}