async function getQuiz(){
	let response = await fetch('https://opentdb.com/api.php?amount=10&difficulty=medium&type=multiple');
	let data = await response.json();

	return data;
}

/* const results = []

fetch('https://opentdb.com/api.php?amount=10&difficulty=medium&type=multiple')
	.then(data => data.json())
	.then(data => {
		for (let i = 0; i < data['results'].length; i++) {
			results.push(data['results'][i]);
		}
	})
	.catch(error => console.log("error: " + error)); */

function decodeHtml(value) {
	var txt = document.createElement("textarea");
	txt.innerHTML = value;
	return txt.value;
}

function doingListContent(index) {
	if (!index)
		index = 0;

	let results = getQuiz();

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

	let answer = [...incorrectAnswers, correctAnswer];
	answer.sort(() => Math.random() - 0.5);

	console.log('correct answer: ' + correctAnswer);
	for (let i = 0; i < answer.length; i++) {
		let btnOpts = document.createElement('button');
		console.log('option' + i + ': ' + answer[i]);
		btnOpts.setAttribute('onclick', `answerCheck('${answer[i]}')`);
		btnOpts.type = 'button';
		btnOpts.textContent = answer[i];
		listQuestions.appendChild(btnOpts);
	}

	lineBreak(listQuestions, 2);
	listQuestions.appendChild(btnExit);


	quizContainer.appendChild(listQuestions);

}

function cleanQuizz() {
	let quizContainer = document.getElementById('opts');

	while (quizContainer.firstChild)
		quizContainer.removeChild(quizContainer.firstChild);
}

let iQuiz = 0;
/* let wrongAnswers = 0;
let correctAnswers = 0; */
function answerCheck(answerPulsed) {
	if (iQuiz == 9) {
		resultsPage();
	} else if (iQuiz > 9) {
		iQuiz = 0;
	}

	console.log(iQuiz)

	if (answerPulsed == decodeHtml(results[iQuiz].correct_answer)) {
		console.log("bien");
		cleanQuizz();
		doingListContent(++iQuiz);
	}
	else {
		console.log("mal");
		cleanQuizz();
		doingListContent(++iQuiz);
	}
}



/*

0: 
"December 14, 1946"
1: 
"October 27, 1945"
2: 
"November 08, 1944"
		*/

