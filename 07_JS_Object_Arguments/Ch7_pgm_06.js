// Using Math.min and Math.max to constrain an argument

var line = function (lineLength) {
    var line = "========================================";
    lineLength = Math.max(0, lineLength);
    lineLength = Math.min(40, lineLength);
    return line.substr(0, lineLength);
  };
  
  console.log(line(30));
  console.log(line(40));
  console.log(line(50));
  
  console.log(line(-20));
  console.log(line(60));

  var spaces = function (spacelength) {
    var space = "                                        ";
    spacelength = Math.max(0,spacelength);
    spacelength = Math.min(40,spacelength);
    return space.substr(0,spacelength);
  }

  console.log(spaces(20));
  console.log(spaces(60));
  
  var emptyBox = function (width) {
    width = Math.max(2, width); 
    width = Math.min(40, width); 

    var topBottom = line(width);
    var middle = "=" + spaces(width - 2) + "=";

    console.log(topBottom);
    for (var i = 0; i < 3; i++) {
        console.log(middle);
    }
    console.log(topBottom);
};

console.log("Empty box with width 12:");
emptyBox(12);
console.log("Empty box with width 5:");
emptyBox(5);


  /* Further Adventures
   *
   * 1) Test line lengths from -20 to 60
   *    in steps of 10.
   *
   * 2) Define a spaces function that returns a string
   *    made up of a specified number of space characters.
   *    The line of spaces returned can have a length
   *    between 0 and 40.
   *
   * 3) Add an emptyBox function
   *    that draws an empty box of specified
   *    width and height 5.
   *
   *    emptyBox(12);
   *
   *    > ============
   *    > =          =
   *    > =          =
   *    > =          =
   *    > ============
   *
   */