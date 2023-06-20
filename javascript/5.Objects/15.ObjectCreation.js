//  Ways to create Object 

//  1) Factory Function
//  2) Constructor Function

//factory Function
    //Tmakes an object and return it
    function createObjects(len ,bre ) {
         
        const rectangle ={
            length :len,
            breadth :bre,
        
            // Behiaviour are added by Method
            draw: function(){
                console.log("drawing");
            }
              
        
        };
        return rectangle;
    }
let rectangleObj = createObjects(5,7);  
rectangleObj.draw();
console.log(rectangleObj.length);
console.log(rectangleObj.breadth);
 


// Constructor Functions  
// constructor function initializes the methods 
function Square (){
    this.area = 1;
    
    this.paint = function(){
        console.log('drawing square'); 
    }
}

var a = new Square();
a.paint()

//Note :- functions are also object in javascript 


/// Dekh bhai sidhhi shdhi baat h iska function class ki thrh behivour krta h hum iske function ka object create kr skte h and function ka data ko access kr skte h , ethier by object or by Function name