const startButton = document.getElementById('start-button');

//adding event listener to the start button to start the quiz with random question
startButton.addEventListener('click', function (event) {
    event.preventDefault();

    const totalQuestions = 20;
    const randomIndex = Math.floor(Math.random() * totalQuestions);

    window.location.href = `questions.html?question=${randomIndex}`;
});