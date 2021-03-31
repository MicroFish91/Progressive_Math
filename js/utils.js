// Takes a number and counts its number of decimal digits
export function countDecimals(number){

    if (Math.floor(number) === number){
        return 0;
    } else {
        return number.toString().split(".")[1].length;
    }

}

// Update Score (string, integer)
export function updateScore(storageProperty, numberWrong) {

    var totalScore = 0;
    var newScore = 19;

    // Check if storage property exists, if not, instantiate it
    if(localStorage.getItem(storageProperty) == null){
        localStorage.setItem(storageProperty, '0');
    }

    totalScore = parseInt(localStorage.getItem(storageProperty));
    newScore -= numberWrong * 5;

    // Tally points and add it to totalScore (cannot go below 0 points)
    if ((totalScore + newScore) < 0) {
        totalScore = 0;
    } else {
        totalScore += newScore;
    }

    localStorage.setItem(storageProperty, totalScore);

}

// Update Wrong Answers (string, array)
export function updateWrongAnswers(storageProperty, wrongAnswers) {

    var userAnswers = {};
    var propertyExists = false;
    var answerProperty = "";

    localStorage.removeItem(storageProperty); //remove after debug

    // Check if storage property exists, if not, instantiate it
    if(localStorage.getItem(storageProperty) == null){
        localStorage.setItem(storageProperty, '');
    } else {
    // Parse local storage string into object
        userAnswers = JSON.parse(localStorage.getItem(storageProperty));
    }  

    // wrongAnswer => [operation, operandOne, operandTwo, user's answer]
    wrongAnswers.forEach((wrongAnswer) => {

        // Checks to see if the property already exists in local storage
        for(let property in userAnswers) {

            answerProperty = `${wrongAnswer[1]} ${operationSymbol(wrongAnswer[0])} ${wrongAnswer[2]}`;

            if (property == answerProperty) {

                propertyExists = true;

            }

        }

        if (Object.keys(userAnswers).length != 0) {

            // Assigns value based on whether or not property already exists or not
            if (propertyExists) {
                userAnswers[answerProperty] += 1;
            } else {
                userAnswers[answerProperty] = 1;
            }

        } else {

            answerProperty = `${wrongAnswer[1]} ${operationSymbol(wrongAnswer[0])} ${wrongAnswer[2]}`;
            userAnswers[answerProperty] = 1;
        }

        // Reset property checker
        propertyExists = false;

    })

    // Make final changes to local storage
    localStorage.setItem(storageProperty, JSON.stringify(userAnswers));

}

function operationSymbol (operation) {

    switch(operation){
        case 'addition':
            return '+';
        case 'subtraction':
            return '-';
        case 'multiplication':
            return '*';
        case 'division':
            return '/';
        default:
            return operation;
    }

}