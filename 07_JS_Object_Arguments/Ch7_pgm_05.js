// Using Math.min and Math.max

var showSmaller = function (num1, num2) {
    var smaller = Math.min(num1, num2);
    var larger = Math.max(num1, num2);

    console.log(smaller + " is smaller than " + larger);
};

showSmaller(12, 3);
showSmaller(-10, 3);

showSmaller(10,20);
showSmaller(89,129);

var showLarger = function (num1,num2) {
    var small = Math.min(num1,num2);
    var large = Math.max(num1,num2);

    console.log(large + " is larger than " + small);
}

showLarger(56,52);
showLarger(89,79);

var showSmallest = function (num1,num2,num3) {
    var smallest = Math.min(num1,num2,num3);
    console.log("The smallest number among three numbers is " + smallest);
}

showSmallest(25,28,8);
showSmallest(29,45,58);


/* Further Adventures
 *
 * 1) Try out some different arguments.
 *
 * 2) Write a showLarger function.
 *
 * 3) Write a showSmallest function that takes
 *    three arguments and displays the smallest
 *    of the three.
 *
 */