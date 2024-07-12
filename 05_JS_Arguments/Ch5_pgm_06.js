// A function with two arguments

var showSum;
var showProduct;
var showDifference;
var showQuotient;

showSum = function (number1, number2) {
	var total = number1 + number2;
	console.log("The sum is " + total);
};

showProduct = function (number1, number2,number3){
	var total = number1 * number2 * number3;
	console.log("The product is " + total);
};

showDifference = function (number1, number2){
	var total = number1 - number2;
	console.log("The Difference is " + total);
};

showQuotient = function (number1, number2){
	var total = number1 % number2;
	console.log("The Quotient is " + total);
};

showSum(30, 23);
showSum(2.8, -5);
showSum(56,74);

showProduct(5,5,2);
showProduct(25,18,5);
showProduct(12,9,9);
showProduct(5,10,5);

showDifference(20,10);
showDifference(35,15);
showDifference(89,50);

showQuotient(15,2);
showQuotient(10,5);
showQuotient(125,4);


/* Further Adventures
 *
 * 1) Use the showSum function to add 56 and 74.
 *
 * To multiply two numbers, use the * symbol.
 * e.g. 3 * 5 is 3 multiplied by 5.
 *
 * 2) Create a showProduct function to multiply two numbers.
 *
 * 3) Use your function to multiply three pairs of numbers.
 *
 * To divide one number by another, use /.
 * e.g. 10 / 2 is 10 divided by 2.
 *
 * 4) What about showDifference and showQuotient
 *    for subtraction and division?
 *
 */