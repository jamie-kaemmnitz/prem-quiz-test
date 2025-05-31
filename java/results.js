//grabbing elements from the HTML for each scoreboard result
const fiveNilScore = document.getElementById('five-nil');
const fourNilScore = document.getElementById('four-nil');
const fourOneScore = document.getElementById('four-one');
const threeOneScore = document.getElementById('three-one');
const threeTwoScore = document.getElementById('three-two');
const twoTwoScore = document.getElementById('two-two');
const twoThreeScore = document.getElementById('two-three');
const oneThreeScore = document.getElementById('one-three');
const oneFourScore = document.getElementById('one-four');
const nilFourScore = document.getElementById('nil-four');
const nilFiveScore = document.getElementById('nil-five');

//creating array for scoreboards and hiding all the scoreboard results initially
let allScores = [fiveNilScore, fourNilScore, fourOneScore, threeOneScore, threeTwoScore, twoTwoScore, twoThreeScore, oneThreeScore, oneFourScore, nilFourScore, nilFiveScore];

allScores.forEach(scores => {
    scores.style.display = 'none';
})

//getting the user and computer score from the URL parameters
const params = new URLSearchParams(window.location.search);
const userScoreResults = parseInt(params.get('user'), 10);
const computerScoreResults = parseInt(params.get('computer'), 10);

//displaying the user and computer scores in the HTML
if (userScoreResults === 20) {
    fiveNilScore.style.display = 'flex';
} else if (userScoreResults <20 && userScoreResults >15 && computerScoreResults <4) {
    fourNilScore.style.display = 'flex';
} else if (userScoreResults === 16 && computerScoreResults === 4) {
    fourOneScore.style.display = 'flex';
} else if (userScoreResults <15 && userScoreResults >11 && computerScoreResults <8) {
    threeOneScore.style.display = 'flex';
} else if (userScoreResults === 12 && computerScoreResults === 8) {
    threeTwoScore.style.display = 'flex';
} else if (userScoreResults <12 && userScoreResults >8) {
    twoTwoScore.style.display = 'flex';
} else if (userScoreResults === 8 && computerScoreResults === 12) {
    twoThreeScore.style.display = 'flex';
} else if (userScoreResults <8 && userScoreResults >3 && computerScoreResults <16 ) {
    oneThreeScore.style.display = 'flex';
} else if (userScoreResults === 4 && computerScoreResults === 16) {
    oneFourScore.style.display = 'flex';
} else if (userScoreResults <4 && computerScoreResults >16 && computerScoreResults <20) {
    nilFourScore.style.display = 'flex';
} else if (userScoreResults === 0) {
    nilFiveScore.style.display = 'flex';
} else {
    alert("something went wrong please try again");
};