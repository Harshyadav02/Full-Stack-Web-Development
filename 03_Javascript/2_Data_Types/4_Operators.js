//Types of Operators :-
  // 1) Arithmetic operators
  // 2) Assignment operators
  // 3) Comparison operators
  // 4) Bitwise operator
  // 5) Logical operator
 
 
// 1) Arithmetic operators
  a = 10;
  b = 20;
 console.log(a+b);
 console.log(a-b);
 console.log(a*b);
 console.log(a/b);
 console.log(a%b);
 console.log(a**b);
// #########################################################################

// 2) Assignment operators
    // ++ , -- , = 
    z = 44;
    console.log(z++); // Post Increment Operator (use the value and then increase the value)
   
    
    // Pre Increment Operator(increase the value and then use the value)
    y = 22;
    console.log(++y);

//#################################################################################
//3) Comparsion Operator
 // >,<,>=,<=,===,!==
    console.log(2>3); //Output false
    console.log(2<3); //Output true
    console.log(5<=5); //Output true
    console.log(5===5); //Output true 

// Difference b/w == and ===
 v = '1'
 w = 1
 console.log(v == w);//output true (== check only value )
 console.log(v ===w);//output false(=== check both the value as well as datatype )

 //########################################################################### 
 // Ternary Operators

 //Syntex :- condition ? true : false
let age =17
let x = (age>18)? 'i can vote' : 'i cannot vote' ;
console.log(x) //output i cannot vote

//###################################################################################
//Logical Operator 
    // And (If all Condtion is true then o/p will be true)
    
    //Or (If any one Condtion is true then o/p will be true)
   
    //Not (True ---> Flase) and (False ----> True)

