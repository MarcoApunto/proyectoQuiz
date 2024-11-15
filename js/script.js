const results = []

fetch('https://opentdb.com/api.php?amount=10&difficulty=medium&type=multiple')
	.then(data => data.json())
	.then(data => {
		for (let i = 0; i < data['results'].length; i++) {
			results.push(data['results'][i]);
		}
	})
	.catch(error => console.log("error: " + error));

console.log(results);

function decodeHtml(value) {
	var txt = document.createElement("textarea");
	txt.innerHTML = value;
	return txt.value;
}

function doingListContent() {
	let category = decodeHtml(results[0].category);
	console.log("category: ", category);

	let question = decodeHtml(results[0].question);
	console.log("question: ", question);

	let answer = decodeHtml(results[0].incorrect_answers + "," + results[0].correct_answer);
	console.log("options: ", answer);

	let answerSplitted = answer.split(',');
	console.log(answerSplitted);

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

	for (let i = 0; i < answerSplitted.length; i++) {
		let btnOpts = document.createElement('button');
		btnOpts.setAttribute('onclick', 'btnCheck' + i + '()');
		btnOpts.setAttribute('class', 'btn-state' + i);
		btnOpts.type = 'button';
		btnOpts.textContent = answerSplitted[i];
		listQuestions.appendChild(btnOpts);
	}

	lineBreak(listQuestions, 2);
	listQuestions.appendChild(btnExit);


	quizContainer.appendChild(listQuestions);

}

function btnCheck0() {
	let getBtn = document.getElementsByClassName('btn-state0')[0]

	console.log(getBtn.innerHTML)
	if (getBtn.innerHTML == results[0].correct_answer)
		console.log("bien");
	else
		console.log("mal");

}

/*
let i = 1;
while (i <= data['results'].length) {
	console.log(data['results'].length)

	i++;
} */

/* let category = decodeHtml(data["results"][0].category);
		console.log("category: ", category);

		let question = decodeHtml(data["results"][0].question);
		console.log("question: ", question);

		let Answer = decodeHtml(data["results"][0].incorrect_answers + "," + data["results"][0].correct_answer);
		console.log("incorrect: ", Answer); 

0: 
"December 14, 1946"
1: 
"October 27, 1945"
2: 
"November 08, 1944"
		*/

