//This creates a variable that can be called on multiple times. This is used to pull the questions for the code quiz. This is done because each question has been setup in an array. This is indicated by the [] brackets. 

var quizQuestions = [
//The below will create each questions. It gives each object it's properties specific to each object. 
    {
        q:"Commonly used data types DO NOT include:", //This is a string for the q property
        options: ["strings", "booleans", "alerts", "numbers"],//This is an array of selections
        a:"alerts"//This is another string for answer
    },

//each questions will be setup in the same manner.

    {
        q:"The condition in an if/else statement is enclosed within _____.",
        options:["quotes", "curly brackets", "parentheses", "square brackets"],
        a:"parentheses"
    },
    {
        q:"Arrays in JavaScript can be used to store ______.",
        options:["numbers and strings", "other arrays", "booleans", "all of the above"],
        a:"all of the above"
    },
    {
        q:"String values must be enclosed within ______ when being assigned to variables.",
        options:["commas","curly brackets", "quotes", "parentheses"],
        a:"quotes"
    },
    {
        q:"A very useful tool used during development and debugging for printing content to the debugger is: ",
        options:["javaScript", "terminal/bash", "for loops","console.log"],
        a:"console.log"
    },
];