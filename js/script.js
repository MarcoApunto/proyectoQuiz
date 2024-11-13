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
	console.log(answerSplitted)

	let quizContainer = document.getElementsByClassName('quiz-container')[0];
	let listQuestions = document.getElementById('opts');

	let option1 = document.createElement('button');
	option1.setAttribute('class', 'list-btn')
	option1.type = 'button';
	option1.textContent = answerSplitted[0];

	let option2 = document.createElement('button');
	option2.setAttribute('class', 'list-btn')
	option2.type = 'button';
	option2.textContent = answerSplitted[1];

	let option3 = document.createElement('button');
	option3.setAttribute('class', 'list-btn')
	option3.type = 'button';
	option3.textContent = answerSplitted[2];

	let option4 = document.createElement('button');
	option4.setAttribute('class', 'list-btn')
	option4.type = 'button';
	option4.textContent = answerSplitted[3];

	listQuestions.appendChild(option1);
	listQuestions.appendChild(option2);
	listQuestions.appendChild(option3);
	listQuestions.appendChild(option4);

	quizContainer.appendChild(listQuestions);
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
		console.log("incorrect: ", Answer); */

