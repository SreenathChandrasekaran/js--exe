// Returning the sum of two numbers

var add;

add = function (number1, number2) {
	var total = number1 + number2;

	return total;
};

var sum = add(50, 23);

console.log(sum);

var sum = add(50, 100);

console.log(sum);

console.log("The sum of 50 and 23 is " + add(50,23));

console.log("The sum of three numbers 20,40,60 is " + add(add(20,40),60));

var three = function (number1,number2,number3) {
	 var total = number1 + number2 + number3;
	 return total;
};



console.log(three(50,20,30));


/* Further Adventures
 *
 * 1) Find and display the sum of
 *    a different pair of numbers
 *
 * 2) Change the call to console.log so that
 *    the display on the console reads:
 *    'The sum of 50 and 23 is 73'
 *    using the add function to generate the answer.
 *
 * 3) Can you use the add function as it is
 *    to add more than two numbers?
 *    Hint: You can nest calls to add.
 *
 * 4) Create a function to return the sum of
 *    three numbers given as arguments.
 *
 */