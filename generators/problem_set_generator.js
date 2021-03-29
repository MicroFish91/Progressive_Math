/* 
    Arithmetic: Integer Problem Set Generator
    setNum (int): number of problem sets to generate
    min (int): minimum number in the range of problems that could be generated (inclusive)
    max (int): maximum number in the range of problems that could be generated (inclusive)
    decDigits (int): number of digits generated past the decimal point
    operation (string): 'addition', 'subtraction', 'multiplication', 'division'
    

    Output (array of arrays[strings]): An array of problem sets (e.g. if addition - [[500, 281, 781], [300, 7, 307], [121, 24, 145]....] ) 
    with length equal to setNum; output[][0] will always be >= output[][1]

    ** Later - Add capacity to generate problems with negative numbers, add the possibility of not placing the larger number
    at the front of each problem array

    *** Function is designed to work with decDigits > 0 for addition, subtraction, & multiplication; but decDigits should equal 0 for division
    due to introduction of overcomplexity from significant figures (outside the scope of arithmetic lessons)
*/
function problem_set_generator(setNum, min, max, decDigits, operation) {

    var problemSet = [];
    var problem = [];
    var decimalBase = 10 ** decDigits;
    var answer = 0;
    var counter = 0;

    // Error: function not designed for these parameters
    if((decDigits != 0) && operation == 'division') {
        return 'Error: Outside scope - function is designed to only take decDigits equal to 0 for division';
    }

    max++; // Math.random's max value is normally exclusive, adding 1 will make it inclusive

    while(counter < setNum){

        problem = [];

        // ** Integer portion of the generator **
        // Generates each integer for the problem
        problem.push(Math.floor(Math.random() * (max - min) + min));
        problem.push(Math.floor(Math.random() * (max - min) + min));

        // ** Decimal portion of the generator **, amends integer portion with decimal portion
        if(decDigits > 0) {
            problem[0] = (problem[0] + parseFloat(Math.round(decimalBase * Math.random()) / decimalBase)).toFixed(decDigits);
            problem[1] = (problem[1] + parseFloat(Math.round(decimalBase * Math.random()) / decimalBase)).toFixed(decDigits);
        }

        // Always puts the larger number at the front of the problem array
        if(problem[0] < problem[1]){
            problem.reverse();
        }

        // Answer 
        switch(operation){

            case 'addition':
                problem.push((parseFloat(problem[0]) + parseFloat(problem[1])).toFixed(decDigits));
                problemSet.push(problem);
                counter++;
                break;

            case 'subtraction':
                problem.push((parseFloat(problem[0]) - parseFloat(problem[1])).toFixed(decDigits));
                problemSet.push(problem);
                counter++;
                break;

            case 'multiplication':
                problem.push((parseFloat(problem[0]) * parseFloat(problem[1])).toFixed(decDigits * 2));
                problemSet.push(problem);
                counter++;
                break;

            case 'division':
                answer = parseFloat(problem[0]) / parseFloat(problem[1]);
                if(countDecimals(answer) < 4) {
                    problem.push(answer);
                    problemSet.push(problem);
                    counter++;
                }
                break;

            default:
                console.log("Error: Invalid operation chosen.");
        }

    }

    return problemSet;

}

// Takes a float and counts its number of decimal digits
function countDecimals(number){

    if (Math.floor(number) === number){
        return 0;
    } else {
        return number.toString().split(".")[1].length
    }

}



// Main
var problemSet = problem_set_generator(25, 1, 250, 0, 'multiplication');

for(let x = 0; x < problemSet.length; x++){
    console.log(`${problemSet[x][0]} * ${problemSet[x][1]} = ${problemSet[x][2]}`);
}