function content_card_constructor(){

    var contentCard = document.createElement('div');
    var operandOne = document.createElement('div');
    var operandTwo = document.createElement('div');
    var solution = document.createElement('input');
    var mainContentHook = document.querySelector('.main-content');

    contentCard.className = 'content-card';

    operandOne.className = 'content-item';
    operandOne.textContent = '9';

    operandTwo.className = 'content-item';
    operandTwo.style = 'border-bottom: 2px solid black;';
    operandTwo.textContent = 'x 5';

    solution.type = 'text';
    solution.name = 'solution';
    solution.className = 'content-solution';

    contentCard.appendChild(operandOne);
    contentCard.appendChild(operandTwo);
    contentCard.appendChild(solution);

    mainContentHook.prepend(contentCard);

}

content_card_constructor();

// Add On-Click Event Listener to the submit-button
document.querySelector('#submit-button').addEventListener("click", () => {

    console.log('clicked');

});