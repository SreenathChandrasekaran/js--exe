// Passing an array to a function

var getVisitorReport = function (visitorArray, dayInWeek) {
	var days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];
	var index = dayInWeek - 1;
	var visitorReport;

	visitorReport = "There were ";
  visitorReport += visitorArray[index];
  visitorReport += " visitors ";
	visitorReport += "on " + days[index];

	return visitorReport;
};

var visitors = [ 354, 132, 210, 221, 481, 321, 585 ];

var report = getVisitorReport(visitors, 2);

console.log(report);

report = getVisitorReport(visitors, 5);

console.log(report);

var week1 = [281, 330, 350, 280, 490, 510, 585];
var week2 = [321, 291, 356, 400, 456, 500, 590];
var week3 = [239, 330, 341, 390, 490, 480, 530];
var week4 = [250, 290, 285, 275, 410, 469, 525];
var month = [week1, week2, week3, week4];

var monthinfo = function(month, week,dayInWeek ){
  var weekinfo = week - 1;
  var monthdetails = month[weekinfo];
  return getVisitorReport(monthdetails,dayInWeek);
};

console.log(monthinfo(month,4,5));



/* Further Adventures
 *
 * 1) Run the report for Friday.
 *
 * 2) Update the function to include Saturday and Sunday.
 *
 * A month of visitor info could be represented as an
 * array of arrays: [ week1, week2, week3, week4 ]
 * where each week could be an array of visitor numbers.
 *
 * 3) Write a new function with three parameters,
 *    the month array, the week wanted and the day wanted.
 *    The new function should return the visitor report specified.
 *    You can call getVisitorReport from your function if you want.
 *
 * 4) Create four arrays of week visitor numbers
 *    and a month array of the four weeks.
 *    Test your function from 3) for different weeks and days.
 *
 */