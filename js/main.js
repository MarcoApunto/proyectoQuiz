// PAGES
const pages = {
	home: {
		title: 'QUIZ WHIZ!',
		content: 'WELCOME QUIZZER',
	},
	question: {
		title: 'ARE YOU READY?',
		content: 'PRESS THE BUTTON WHEN YOU ARE READY',
	},
	results: {
		title: 'SCORE',
		content: 'LATEST GAMES',
	}
};

// NAVIGATION FOR CHANGE THE PAGE
function goTo(section) {
	let idSection = document.getElementById('psa-page');

	while (idSection.firstChild) {
		idSection.removeChild(idSection.firstChild);
	}

	let actualPage = pages[section];

	if (actualPage) {
		let divContent = document.createElement('div')

		let titleH1 = document.createElement('h1');
		titleH1.textContent = actualPage.title;

		let pContent = document.createElement('p');
		pContent.textContent = actualPage.content;

		divContent.appendChild(titleH1);
		divContent.appendChild(pContent);
		idSection.appendChild(divContent);

		if (section == 'home') {
			divContent.classList.add('home');
			lineBreak(divContent, 1)
			homePage();
		}
		else if (section == 'question') {
			divContent.classList.add('question');
			lineBreak(divContent, 1)
			questionPage();
		}
		else if (section == 'results') {
			divContent.classList.add('results');
			lineBreak(divContent, 2)
			resultsPage();
		}
	} else {
		alert('Error 404: Page not found.')
	}
}

// HOME PAGE
function homePage() {
	let divQuestion = document.createElement('div')

	let pQuestion = document.createElement('p');
	pQuestion.textContent = 'Welcome to the knowledge challenge! In this trivia of 10 questions, we will test your memory, mental sharpness and curiosity about various topics. Each question will have 4 options, but only one will be correct. Show your ingenuity and see how far you can go! Get ready to enjoy and learn while you play.';

	let pQuestion2 = document.createElement('p');
	pQuestion2.textContent = 'Will you be able to answer all?';

	divQuestion.appendChild(pQuestion);
	lineBreak(divQuestion, 1);
	divQuestion.appendChild(pQuestion2);
	document.getElementsByClassName('home')[0].appendChild(divQuestion);

	removeFooter();
}

// QUESTION / QUIZ PAGE
function questionPage() {
	let divQuestion = document.createElement('div');

	let btnPlay = document.createElement('button');
	btnPlay.setAttribute("onclick", "gameStart();")
	btnPlay.classList.add('btn-play');
	btnPlay.textContent = "START";

	divQuestion.appendChild(btnPlay);
	document.getElementsByClassName('question')[0].appendChild(divQuestion);

	removeFooter();
}

// SCORE PAGE
function resultsPage() {
	let divCanvas = document.createElement('div');
	divCanvas.classList.add('canvas-container');

	let chartCanvas = document.createElement('canvas');
	chartCanvas.id = 'my-chart';

	if (!(document.getElementById('footer')))
		createFakeFooter();

	divCanvas.appendChild(chartCanvas);

	document.getElementsByClassName('results')[0].appendChild(divCanvas);

	createChart();
}

// PUT LINE BREAK (<br>)
function lineBreak(father, manylb) {

	for (let i = 0; i < manylb; i++) {
		let lb = document.createElement('br');

		father.appendChild(lb);
	}
}

// CREATE FAKE FOOTER
function createFakeFooter() {
	let containerClass = document.getElementsByTagName('div')[1];

	let fakeFooter = document.createElement('section');
	fakeFooter.setAttribute('id', 'footer');

	let spanFooter = document.createElement('span');
	spanFooter.classList.add('footer-text');
	spanFooter.textContent = '© All non-reserved rights have made the creation of this web possible.';

	let aLinkedin = document.createElement('a');
	aLinkedin.href = 'https://www.linkedin.com/in/marcofs/';
	aLinkedin.target = '_blank';
	aLinkedin.title = 'linkedin';
	aLinkedin.classList.add('icons');

	let iconLinkedin = document.createElement('i');
	iconLinkedin.classList.add('fa-brands');
	iconLinkedin.classList.add('fa-linkedin');
	iconLinkedin.ariaHidden = true;

	let aGithub = document.createElement('a');
	aGithub.href = 'https://github.com/MarcoApunto';
	aGithub.target = '_blank';
	aGithub.title = 'github';
	aGithub.classList.add('icons');

	let iconGithub = document.createElement('i');
	iconGithub.classList.add('fa-brands');
	iconGithub.classList.add('fa-github');
	iconLinkedin.ariaHidden = true;

	fakeFooter.appendChild(spanFooter);
	lineBreak(spanFooter, 1);
	aLinkedin.appendChild(iconLinkedin);
	spanFooter.appendChild(aLinkedin);
	aGithub.appendChild(iconGithub);
	spanFooter.appendChild(aGithub);

	containerClass.appendChild(fakeFooter);

}

// REMOVE THE FOOTER
function removeFooter() {
	let idFooter = document.getElementById('footer');

	if (idFooter) {
		idFooter.remove();
	}
}

// GAME START
function gameStart() {
	let divContainer = document.getElementById('psa-page');

	let getElem = document.getElementsByClassName('question');
	if (getElem) {
		getElem[0].remove();
	}

	createGame(divContainer);
}

// CREATE THE BASE OF THE QUIZ
function createGame(father) {
	let divQuiz = document.createElement('div');
	divQuiz.setAttribute('class', 'quiz-container');

	let divHeader = document.createElement('div');
	let titleHeader = document.createElement('h1');
	titleHeader.textContent = 'QUIZ WHIZ!';

	let divQuestion = document.createElement('div');
	
	let listOptions = document.createElement('div');
	listOptions.setAttribute("id", "opts")

	divHeader.appendChild(titleHeader);
	divQuestion.appendChild(listOptions);

	divQuiz.appendChild(divHeader);
	divQuiz.appendChild(divQuestion);

	father.appendChild(divQuiz);
	doingListContent();
}

goTo('home');
