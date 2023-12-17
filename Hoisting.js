/Hoisting in JavaScript

/*Hoisting is a phenomenon in JS by which you can access functions and variables even before you have initialized.
You can access it without error.*/

getName();
console.log(x);


var x =7;

function getName(){
    console.log("Namaste Javascript");
}
