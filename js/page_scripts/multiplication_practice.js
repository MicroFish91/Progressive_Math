import { contentCardConstructor } from '../constructors.js';
import { arithmeticGenerator } from '../generators/arithmetic.js';

var problemSet = arithmeticGenerator(19, 1, 9, 0, 'multiplication');
var answerSet = [];
var wrongAnswer = []; // [operation, operand1, operand2, userAnswer]
var wrongAnswers = [];

// Set up problem fields
problemSet.forEach((problem) => {

    contentCardConstructor(problem[0], problem[1], problem[2], problem[2].length);

})


// Add On-Click Event Listener to the submit-button
document.querySelector('#submit-button').addEventListener('click', () => {

    // Double check confirm with user
    if (confirm('Are you done answering all the questions?')) {

        answerSet = document.querySelectorAll('.content-solution');  // Holds HTML input elements for all user-inputted solutions
        
        // Compare each answer to the answer bank - answer bank is stored in each card's 'name' property during contactCardConstructor init 
        // (e.g. for 5 x 7 = 35 => answerSet.name = '5 7 35')
        for(let index = 0; index < 19; index++) {

            if(answerSet[index].value != answerSet[index].name.split(' ')[2]){

                wrongAnswer = ['multiplication', answerSet[index].name.split(' ')[0], answerSet[index].name.split(' ')[1], answerSet[index].value];
                wrongAnswers.push(wrongAnswer);

            }

        }

    } 

    // Update Local Storage with new score and wrong answers
   if(localStorage.getItem('multiplicationPracticeScore') == null){
        localStorage.setItem('multiplicationPracticeScore', '0');
   }

   if(localStorage.getItem('multiplicationPracticeWrongAnswers') == null){
    localStorage.setItem('multiplicationPracticeWrongAnswers', '');
   }

   

});

