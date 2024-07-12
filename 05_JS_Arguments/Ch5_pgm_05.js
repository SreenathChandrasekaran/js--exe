// Using the square function

var square;
var cube;
var squareRoot;

square = function (numberToSquare) {
  var result;
  result = numberToSquare * numberToSquare;
  console.log(numberToSquare + " * " + numberToSquare + " = " + result);
};

cube = function (numberToCube){
  var result1;
  result1 = numberToCube * numberToCube * numberToCube;
  console.log(numberToCube + " * " + numberToCube + " * " + numberToCube + " = " + result1);
};

squareRoot = function (num){
   console.log("The Square Root of Number is "+ Math.sqrt(num));
};

square(10);
square(-2);
square(1111);
square(0.5);

cube(10);
cube(-2);
cube(1111);
cube(0.5);

squareRoot(9);



/* Further Adventures
 *
 * 1) Define a cube function that cubes
 *    any number passed in as an argument.
 *
 * 2) Call your cube function four times
 *    with different arguments to test it.
 *
 * Math.sqrt is a built-in function to find
 * the square root of a number.
 * e.g. Math.sqrt(9) finds the square root of 9.
 *
 * 3) Define and test a squareRoot function
 *    to find square roots and display
 *    them on the console.
 *    e.g. The square root of 9 is 3.
 *
 */