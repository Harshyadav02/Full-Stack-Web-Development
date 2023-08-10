// Array is colloection of data and can store different types of data

// Creation of array
let arr = [1,2,3,4,5,6];

console.log(arr)

//we can insert element at End  ,Begin ,End ,Middle

//End 

arr.push(77)
console.log(arr) // 77 wil beadded to the end 

// Begin
arr.unshift(0)
console.log(arr) // 0 will be added at beginning

//Middle
arr.splice(2,0,'a','b','c')
console.log(arr) // 2, is the index ,0 are the number of element which will be deleted ,'a,'b','c' are the element which will be added at index 2

//Note 0 is not the element it is the number of elements which are going to be deleted ,in place of 0 if there was 1 then 1 element would got delete fromthe array