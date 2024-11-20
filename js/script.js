// GLOBAL VARS
let results = [];
let iQuiz = 0;
let wrongAnswers = 0;
let correctAnswers = 0;

// RESET TO INITIAL VALUE THE GLOBAL VARS
function cleanGlobalVars() {
	iQuiz = 0;
	wrongAnswers = 0;
	correctAnswers = 0;
}

// CLEAN THE QUIZ OPTIONS FOR THE NEXT QUESTION
function cleanQuiz() {
	let quizContainer = document.getElementById('opts');

	while (quizContainer.firstChild)
		quizContainer.removeChild(quizContainer.firstChild);
}

// CLEAN THE QUIZ CONTAINER AT THE END OF THE QUIZ
function cleanFullQuiz() {
	let quizContainer = document.getElementsByClassName('quiz-container')[0];
	if (quizContainer)
		quizContainer.remove();
}

// DECODE THE TEXT FROM THE API TO SHOW THE QUESTION CORRECTLY
function decodeHtml(value) {
	var txt = document.createElement("textarea");
	txt.innerHTML = value;
	return txt.value;
}

// SHOW THE RETRY BUTTON IF THE FETCH FAILS
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

//ASYNC FUNCTIONS FOR FETCHING DATA
async function getQuiz() {
	let response = await fetch('https://opentdb.com/api.php?amount=10&difficulty=medium&type=multiple');
	let data = await response.json();

	return data['results'];
}

//ASYNC FUNCTIONS FOR GENERATE THE QUIZ
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
		btnOpts.addEventListener('click', () => answerCheck(answer[i]));
		btnOpts.type = 'button';
		btnOpts.textContent = answer[i];
		listQuestions.appendChild(btnOpts);
	}

	lineBreak(listQuestions, 2);
	listQuestions.appendChild(btnExit);

	quizContainer.appendChild(listQuestions);
}

// CHECK THE ANSWER, NEXT QUESTION AND SCORE THINGS
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
function formatDate(date) {
	let day = date.getDate().toString().padStart(2, '0');
	let month = (date.getMonth() + 1).toString().padStart(2, '0');
	let year = date.getFullYear();
	let hour = date.getHours().toString().padStart(2, '0');
	let minutes = date.getMinutes().toString().padStart(2, '0');

	return `${day}/${month}/${year}_${hour}:${minutes}`;
}

// SAVE THE SCORE IN THE LOCAL STORAGE
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

// CREATE THE CHART FOR THE SCORE
function createChart() {
	let varLocalStorage = JSON.parse(localStorage.getItem('score'));

	let labels = varLocalStorage.map(elem => elem.time);
	let corrects = varLocalStorage.map(elem => elem.correct);
	let incorrects = varLocalStorage.map(elem => elem.incorrect);

	const ctx = document.getElementById('my-chart');
	new Chart(ctx, {
		type: 'bar',
		data: {
			labels: labels,
			datasets: [{
				label: 'CORRECTS',
				data: corrects,
				borderWidth: 1,
				backgroundColor: '#EB6302',
				borderColor: '#672b00',
			},
			{
				label: 'INCORRECTS',
				data: incorrects,
				borderWidth: 1,
				backgroundColor: '#672b00',
				borderColor: '#EB6302',
			}]
		},
		options: {
			responsive: true,
			maintainAspectRatio: false,
			scales: {
				y: {
					beginAtZero: true
				}
			}
		}
	});
}
