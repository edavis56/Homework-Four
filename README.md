# Homework-Two

This assignment had the following acceptance criteria. This README will show how each of these criteria was met.

![](/assets/images/AcceptanceCriteria.JPG)

Criteria One: "WHEN I click the start button, THEN a timer starts and I am presented with a question"

The below images show the code to setup the start button, timer, and questios. 

The bleow code sets up the start button with an EventListner containing a function that will hide the intro id and show the quiz id. Additionally, the timer will start as well as the questions. 

![](/assets/images/StartButtonSetup.JPG)

The next set of code sets up the timer using a function. 

![](/assets/images/TimerSetup.JPG)

The final piece of code for criteria one is belwo. This is for the questions. Through a function the questions are displayed using a for loop. 

![](/assets/images/QuestionSetup.JPG)

To facilitate the for loop an additional JavaScript file was setup. This JS file creats and index of objects with properties that contain the question, selections, and answer. See below. 

![](/assets/images/QuestionIndex.JPG)

Criteria Two: "WHEN I answer a question, THEN I am presented with another question"

The image below displays the code to populate the next question within the question index. This is done with a function containing an if else statement that is checking the question index number against the length of the index. Then it creats the question based off of this. This code section is also stoping the timer if it is less than zero as well as setting up the score. 

![](/assets/images/NextQuestion.JPG)

Criteria Three: "WHEN I anser a question incorrectly, THEN time is subtracted from the clock"

To achieve this, an eventListener had to be added to the question choices. Then a function was setup to check the selection clicked aginst the answer property of the question object on the Questions.js file. 

![](/assets/images/IncorrectAnswer.JPG)

Criteria Four: "WHEN all questions are answered or the timer reaches 0, THEN the game is over"

In a prior criteria a stop timer function was setup. The function clears the interval, stopping the timer when the currentQuestion is equal to the index length. Additionally the code also creates and if statement should the timer be less than zero. Hiding the quiz and showing the initials input screen. 

![](/assets/images/ZeroTimer.JPG)

Final Criteria: "WHEN the game is over, THEN I can save my initials and my score"

The below code creates an area to input initials and save the score. This is done using the key value pairs saved to the local storage. 

![](/assets/images/LocalStore.JPG)
