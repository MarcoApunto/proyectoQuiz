// Global var
let results = [];
let iQuiz = 0;
let wrongAnswers = 0;
let correctAnswers = 0;

// RESET TO INITIAL VALUE
function cleanGlobalVars() {
	iQuiz = 0;
	wrongAnswers = 0;
	correctAnswers = 0;
}

function cleanQuiz() {
	let quizContainer = document.getElementById('opts');

	while (quizContainer.firstChild)
		quizContainer.removeChild(quizContainer.firstChild);
}

// UTILS
function cleanFullQuiz() {
	let quizContainer = document.getElementsByClassName('quiz-container')[0];
	if (quizContainer)
		quizContainer.remove();
}

function decodeHtml(value) {
	var txt = document.createElement("textarea");
	txt.innerHTML = value;
	return txt.value;
}

function showButtonRetry() {
	let getOptsContainer = document.getElementById('opts');

	let btnRetry = document.createElement('button');
	btnRetry.setAttribute('class', 'btn-play');
	btnRetry.setAttribute('onclick', 'doingListContent(0)');
	btnRetry.id = 'retry';
	btnRetry.type = 'button';
	btnRetry.textContent = 'Try again (3 secs, pls)';

	getOptsContainer.appendChild(btnRetry);
}

//ASYNC FUNCTIONS
async function getQuiz() {
	let response = await fetch('https://opentdb.com/api.php?amount=10&difficulty=medium&type=multiple');
	let data = await response.json();

	return data['results'];
}

async function doingListContent(index) {
	if (!index)
		index = 0;

	if (index == 0)
		results = await getQuiz();

	if (document.getElementById('retry'))
		(document.getElementById('retry')).remove();

	if (!results)
		showButtonRetry();

	let category = decodeHtml(results[index].category);
	let question = decodeHtml(results[index].question);

	let incorrectAnswers = results[index].incorrect_answers.map(elem => decodeHtml(elem));
	let correctAnswer = decodeHtml(results[index].correct_answer);

	let quizContainer = document.getElementsByClassName('quiz-container')[0];
	let listQuestions = document.getElementById('opts');

	let titleQuestion = document.createElement('h2');
	titleQuestion.textContent = question;

	let titleCategory = document.createElement('h4');
	titleCategory.textContent = category;

	let btnExit = document.createElement('button');
	btnExit.setAttribute('class', 'btn-play');
	btnExit.type = 'button'
	btnExit.textContent = 'Salir'

	listQuestions.appendChild(titleCategory);
	lineBreak(listQuestions, 1);
	listQuestions.appendChild(titleQuestion);
	lineBreak(listQuestions, 1);

	let answer = [...incorrectAnswers];
	let randomIndex = Math.floor(Math.random() * (answer.length + 1));
	answer.splice(randomIndex, 0, correctAnswer);

	console.log('correct answer: ' + correctAnswer);
	for (let i = 0; i < answer.length; i++) {
		let btnOpts = document.createElement('button');
		console.log('option' + i + ': ' + answer[i]);
		btnOpts.setAttribute(`onclick`, `answerCheck('${answer[i]}')`);
		btnOpts.type = 'button';
		btnOpts.textContent = answer[i];
		listQuestions.appendChild(btnOpts);
	}

	lineBreak(listQuestions, 2);
	listQuestions.appendChild(btnExit);

	quizContainer.appendChild(listQuestions);
}

// CHECK ANSWERS, NEXT QUESTION AND SCORE THINGS
function answerCheck(answerPulsed) {

	if (answerPulsed == decodeHtml(results[iQuiz].correct_answer)) {
		correctAnswers++;
	}
	else {
		wrongAnswers++;
	}

	if (iQuiz == 9) {
		cleanFullQuiz();
		chartData();
		cleanGlobalVars();
		goTo('results');
		return;
	}

	cleanQuiz();
	doingListContent(++iQuiz);
}
// DATE FORMATTER
function formatDate(fecha) {
	let dia = fecha.getDate().toString().padStart(2, '0');
	let mes = (fecha.getMonth() + 1).toString().padStart(2, '0'); // Mes es base 0
	let anio = fecha.getFullYear();
	let hora = fecha.getHours().toString().padStart(2, '0');
	let minutos = fecha.getMinutes().toString().padStart(2, '0');

	return `${dia}/${mes}/${anio}_${hora}:${minutos}`;
}

// SAVE THE SCORE
function chartData() {
	let dataScore = {
		correct: correctAnswers,
		incorrect: wrongAnswers,
		time: formatDate(new Date()),
	};

	let score = localStorage.getItem('score');
	if (score)
		score = JSON.parse(score)
	else
		score = []

	score.push(dataScore);
	localStorage.setItem('score', JSON.stringify(score));
}

function createChart() {
	let varLocalStorage = localStorage.getItem('score');
	let parsedLS = JSON.parse(varLocalStorage);
	console.table(parsedLS);

	const ctx = document.getElementById('myChart');
	new Chart(ctx, {
		type: 'bar',
		data: {
			labels: [parsedLS[0].time, parsedLS[1].time, parsedLS[2].time],
			datasets: [{
				label: 'ACIERTOS',
				data: [parsedLS[0].correct, parsedLS[1].correct, parsedLS[2].correct],
				borderWidth: 1
			},
			{
				label: 'FALLOS',
				data: [parsedLS[0].incorrect, parsedLS[1].incorrect, parsedLS[2].incorrect],
				borderWidth: 1
			}]
		},
		options: {
			scales: {
				y: {
					beginAtZero: true
				}
			}
		}
	});
}
