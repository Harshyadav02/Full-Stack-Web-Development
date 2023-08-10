function Circle (){
    this.radius = 1;
    this.cir = 20;
    this.paint = function(){
        console.log('drawing circle'); 
    }
}

var a = new Circle();

// adding new property from outside the object
a.pie = 22/7;
console.log(a)
//deleting the property
delete a.cir;
console.log(a)
