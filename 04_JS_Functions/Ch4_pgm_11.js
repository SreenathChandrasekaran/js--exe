// Using the same function with multiple objects

var movie1;
var movie2;
var movie3;
var movie;
var showMovieInfo;

movie1 = {
    title: "Inside Out",
    actors: "Amy Poehler, Bill Hader",
    directors: "Pete Doctor, Ronaldo Del Carmen"
};

movie2 = {
    title: "Spectre",
    actors: "Daniel Craig, Christoph Waltz",
    directors: "Sam Mendes"
};

movie3 = {
    title: "Star Wars: Episode VII - The Force Awakens",
    actors: "Harrison Ford, Mark Hamill, Carrie Fisher",
    directors: "J.J.Abrams"
};

showMovieInfo = function () {
    console.log("Movie information for " + movie.title);
    console.log("------------------------------");
    console.log("Actors: " + movie.actors);
    console.log("Directors: " + movie.directors);
    console.log("------------------------------");
};

movie = movie1;
showMovieInfo();

movie = movie2;
showMovieInfo();

movie = movie3;
showMovieInfo();

var quiz1;
var quiz2;
var quiz3;
var quiz;
var displayQuiz;

quiz1 = {
    question: "Capital of TamilNadu",
    option1: "Chennai",
    option2: "Coimbatore",
    option3: "Madurai",
    option4: "Trichy" 
};

quiz2 = {
    question: "Capital of India",
    option1: "TamilNadu",
    option2: "New Delhi",
    option3: "Mumbai",
    option4: "Calcutta" 
};

quiz3 = {
    question: "Capital of Maharashtra",
    option1: "Mumbai",
    option2: "Pune",
    option3: "Nashik",
    option4: "Thane" 
};

displayQuiz = function() {
    console.log("Multiple Choice Questions");
    console.log("Question :" + quiz.question);
    console.log(" a)" + quiz.option1);
    console.log(" b)" + quiz.option2);
    console.log(" c)" + quiz.option3);
    console.log(" d)" + quiz.option4);
};

quiz = quiz1;
displayQuiz();

quiz = quiz2;
displayQuiz();

quiz = quiz3;
displayQuiz();



/* Further Adventures
 *
 * 1) Create an object to represent
 *    a multiple choice quiz question.
 *
 * 2) Create two more quiz question objects.
 *
 * 3) Create a function to show
 *    the question and answer options.
 *
 * 4) Use the same variable assignment technique
 *    as above to display all three questions
 *    on the console.
 *
 */