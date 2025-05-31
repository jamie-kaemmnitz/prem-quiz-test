//grabbed the elements of the buttons from the HTML
const nextQuestionButton = document.getElementsByClassName('next-question');
const continueButton = document.getElementsByClassName('continue-button');
const checkScoreButton = document.getElementById('check-score');

//grabbed the elements of the questions from the HTML
const arsenalQuestion = document.getElementById('arsenal');
const astonVillaQuestion = document.getElementById('aston-villa');
const bournemouthQuestion = document.getElementById('bournemouth');
const brentfordQuestion = document.getElementById('brentford');
const brightonQuestion = document.getElementById('brighton');
const chelseaQuestion = document.getElementById('chelsea');
const crystalPalaceQuestion = document.getElementById('crystal-palace');
const evertonQuestion = document.getElementById('everton');
const fulhamQuestion = document.getElementById('fulham');
const ipswichQuestion = document.getElementById('ipswich');
const leicesterQuestion = document.getElementById('leicester');
const liverpoolQuestion = document.getElementById('liverpool');
const manCityQuestion = document.getElementById('man-city');
const manUtdQuestion = document.getElementById('man-utd');
const newcastleQuestion = document.getElementById('newcastle');
const nottinghamForestQuestion = document.getElementById('nottingham-forest');
const southamptonQuestion = document.getElementById('southampton');
const tottenhamQuestion = document.getElementById('tottenham');
const westHamQuestion = document.getElementById('west-ham');
const wolvesQuestion = document.getElementById('wolves');

//turning the questions into an array
let questionsArray = [arsenalQuestion, astonVillaQuestion, bournemouthQuestion, brentfordQuestion, brightonQuestion, chelseaQuestion, crystalPalaceQuestion, evertonQuestion, fulhamQuestion, ipswichQuestion, leicesterQuestion, liverpoolQuestion, manCityQuestion, manUtdQuestion, newcastleQuestion, nottinghamForestQuestion, southamptonQuestion, tottenhamQuestion, westHamQuestion, wolvesQuestion]

//grabbed the elements of the answers from the HTML
const answers = Array.from(document.getElementsByClassName('answers'));
const correctAnswer = document.getElementsByClassName('correct-answers');
const wrongAnswer = document.getElementsByClassName('wrong-answers');

//grabbed the elements of the score from the HTML
const youScored = document.getElementById('you-scored');
const computerScored = document.getElementById('computer-scored');
const endOfQuiz = document.getElementById('end-of-quiz');

//setting the initial score to 0
let userScore = 0;
let computerScore = 0;

//hiding the display of the elements
Array.from(correctAnswer).forEach(answer => {
    answer.style.display = 'none';
});

Array.from(wrongAnswer).forEach(answer => {
    answer.style.display = 'none';
});

Array.from(nextQuestionButton).forEach(button => {
    button.style.display = 'none';
});

youScored.style.display = 'none';
computerScored.style.display = 'none';
endOfQuiz.style.display = 'none';

questionsArray.forEach(question => {
    question.style.display = 'none';
});

//code to allow questions to be displayed in a random order
//code help from Chat GPT
const params = new URLSearchParams(window.location.search);
const questionIndex = parseInt(params.get('question'), 10);

if (!isNaN(questionIndex) || questionIndex < 0 || questionIndex >= questionsArray.length) {
    questionsArray[questionIndex].style.display = 'flex';
    currentQuestionIndex = questionIndex;
} else {
    currentQuestionIndex = Math.floor(Math.random() * questionsArray.length);
    questionsArray[currentQuestionIndex].style.display = 'flex';
}
//

//adding event listeners to the answers
answers.forEach(function(answer) {
    answer.addEventListener('click', function () {
        const parentDiv = answer.closest('.questions');

        //code help from Chat GPT
        const allAnswers = parentDiv.querySelectorAll('.answers');
        allAnswers.forEach(btn => {
            btn.style.pointerEvents = 'none';
            btn.style.opacity = '0.6';
        });
        //

        if (answer.getAttribute('data-correct') === 'true') {
            answer.style.backgroundColor = 'green';
            const goodChoice = parentDiv.querySelector('.correct-answers');
            goodChoice.style.display = 'flex';
            userScore++;

            if (userScore %4 === 0 && userScore !== 0) {
                youScored.style.display = 'flex';
            }

        } else {
            answer.style.backgroundColor = 'red';
            const badChoice = parentDiv.querySelector('.wrong-answers');
            badChoice.style.display = 'flex';
            computerScore++;

            if (computerScore %4 === 0 && computerScore !== 0) {
                computerScored.style.display = 'flex';
            }
        }

        const nextButton = parentDiv.querySelector('.next-question');
        nextButton.style.display = 'flex';
    });
});

//adding event listeners to the next question button and continue button
Array.from(nextQuestionButton).forEach(button => {
    button.addEventListener('click', function () {
        questionsArray.forEach(question => question.style.display = 'none');

        questionsArray.splice(currentQuestionIndex, 1);

        if (questionsArray.length > 0) {
            currentQuestionIndex = Math.floor(Math.random() * questionsArray.length);
            questionsArray[currentQuestionIndex].style.display = 'flex';
        } else {
            endOfQuiz.style.display = 'flex';
        }
    });
});

Array.from(continueButton).forEach(button => {
    button.addEventListener('click', function () {
        youScored.style.display = 'none';
        computerScored.style.display = 'none';
    });
});

//adding event listener to the check score button
checkScoreButton.addEventListener('click', function () {
    window.location.href = `results.html?user=${userScore}&computer=${computerScore}`;
});