const rectangle ={
    length :1 ,
    breadth :2,

    // Behiaviour are added by Method
    draw: function(){
        console.log("drawing");
    }
   

};

//By use of dot operator we can access behivaiour of the object
console.log(rectangle.length);  //Output 1
console.log(rectangle.breadth); //output 2
rectangle.draw(); //output drawing


