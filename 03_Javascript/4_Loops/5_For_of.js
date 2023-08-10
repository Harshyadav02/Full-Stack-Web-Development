// for of loop is uded for itreables like arrray map etc...

// Objects are not iterables but we can use for of loop by jugad
let rectangle = {
    length :2,
    breadth : 4,
}
for(let key of Object.keys(rectangle)) {
    console.log(key); //lenght 
                        // breadth
}
for(let key of Object.entries(rectangle)) {
    console.log(key); //[ 'length', 2 ]
                    //[ 'breadth', 4 ]
}z