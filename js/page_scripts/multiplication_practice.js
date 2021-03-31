import { contentCardConstructor, removeCardConstructor } from '../constructors.js';
import { arithmeticGenerator } from '../generators/arithmetic.js';
import { updateScore, updateWrongAnswers } from '../utils.js';

var problemSet = arithmeticGenerator(19, 1, 9, 0, 'multiplication');
var answerSet = [];
var parentSet = [];
var wrongAnswer = []; // [operation, operand1, operand2, userAnswer]
var wrongAnswers = [];

// Set up problem fields
problemSet.forEach((problem) => {
    contentCardConstructor(problem[0], problem[1], problem[2], problem[2].length);
})


// Add On-Click Event Listener to the submit-button
document.querySelector('#submit-button').addEventListener('click', () => {

    wrongAnswers = [];

    // Double check confirm with user
    if (confirm('Are you done answering all the questions?')) {

        answerSet = document.querySelectorAll('.content-solution');  // Holds HTML input elements for all user-inputted solutions
        parentSet = document.querySelectorAll('.content-card');
        
        // Compare each answer to the answer bank - answer bank is stored in each card's 'name' property during contactCardConstructor init 
        // (e.g. for 5 x 7 = 35 => answerSet.name = '5 7 35')
        for(let index = 0; index < 19; index++) {

            if(answerSet[index].value != answerSet[index].name.split(' ')[2]){

                wrongAnswer = ['multiplication', answerSet[index].name.split(' ')[0], answerSet[index].name.split(' ')[1], answerSet[index].value];
                wrongAnswers.push(wrongAnswer);

                // Color Card Wrong
                parentSet[index].style['background'] = 'red';

            } else {
                // Color Card Right
                parentSet[index].style['background'] = 'green';
            }

        }
        
        // Update Local Storage with new score and wrong answers
        updateScore('multiplicationPracticeScore', wrongAnswers.length);
        updateWrongAnswers('multiplicationPracticeWrongAnswers', wrongAnswers);

        // Set timeout to deal with css coloring async issue
        setTimeout(() => {
            // Alert user of current score
            alert(`You got ${wrongAnswers.length} wrong.  You now have a total of ${localStorage.getItem('multiplicationPracticeScore')} points.`);

            // Remove problem fields
            removeCardConstructor();

            // Set up problem fields again
            problemSet = arithmeticGenerator(19, 1, 9, 0, 'multiplication');

            problemSet.forEach((problem) => {
                contentCardConstructor(problem[0], problem[1], problem[2], problem[2].length);
            })
        }, 200); 
        
    } 
});

