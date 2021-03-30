/* 
    Takes 2 problem components (integers/floats converted to string) 
    and constructs a problem on the page for the user to practice
    (will appear as a box on the page with content e.g. 5 x 7 = [])
*/
export function contentCardConstructor(probCompOne, probCompTwo, probSolution, maxLength){

    var contentCard = document.createElement('div');
    var operandOne = document.createElement('div');
    var operandTwo = document.createElement('div');
    var solution = document.createElement('input');
    var mainContentHook = document.querySelector('.main-content');

    contentCard.className = 'content-card';

    operandOne.className = 'content-item';
    operandOne.textContent = probCompOne.toString();

    operandTwo.className = 'content-item';
    operandTwo.style = 'border-bottom: 2px solid black;';
    operandTwo.textContent = `x ${probCompTwo.toString()}`;

    solution.type = 'text';
    solution.name = 'solution';
    solution.className = 'content-solution';
    solution.name = `${probCompOne} ${probCompTwo} ${probSolution}`;
    solution.maxLength = maxLength;

    contentCard.appendChild(operandOne);
    contentCard.appendChild(operandTwo);
    contentCard.appendChild(solution);

    mainContentHook.prepend(contentCard);

}