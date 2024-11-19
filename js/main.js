const pages = {
	home: {
		title: '¡QUIZ DICES!',
		content: 'BUENAS TRIVIALERO',
	},
	question: {
		title: '¡NO VA MÁS!',
		content: 'PULSE EL BOTÓN CUANDO ESTÉS LISTO',
	},
	results: {
		title: 'PUNTOS',
		content: 'ESTÁ PÁGINA ES LA QUE TE MOSTRARÁ LO MALO QUE ERES',
	}
};

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
		alert('Error 404: La página no existe.')
	}
}

function homePage() {
	let divQuestion = document.createElement('div')

	let pQuestion = document.createElement('p');
	pQuestion.textContent = '¡Bienvenido al desafío de conocimientos! En este trivial de 10 preguntas, pondremos a prueba tu memoria, agudeza mental y curiosidad sobre diversos temas. Cada pregunta contará con 4 opciones, pero solo una será la correcta. ¡Demuestra tu ingenio y veamos qué tan lejos llegas! Prepárate para disfrutar y aprender mientras te diviertes.';

	let pQuestion2 = document.createElement('p');
	pQuestion2.textContent = '¿Serás capaz de acertar en todas?';

	divQuestion.appendChild(pQuestion);
	lineBreak(divQuestion, 1);
	divQuestion.appendChild(pQuestion2);
	document.getElementsByClassName('home')[0].appendChild(divQuestion);

	removeFooter();
}

function questionPage() {
	let divQuestion = document.createElement('div');

	let btnPlay = document.createElement('button');
	btnPlay.setAttribute("onclick", "gameStart();")
	btnPlay.classList.add('btn-play');
	btnPlay.textContent = "EMPEZAR";

	divQuestion.appendChild(btnPlay);
	document.getElementsByClassName('question')[0].appendChild(divQuestion);

	removeFooter();
}

function resultsPage() {
	let divQuestion = document.createElement('div');

	let pQuestion = document.createElement('p');
	pQuestion.textContent = 'SE INSERTARÁ UNA GRÁFICA';

	divQuestion.appendChild(pQuestion);

	createFakeFooter();
}

function lineBreak(father, manylb) {

	for (let i = 0; i < manylb; i++) {
		let lb = document.createElement('br');

		father.appendChild(lb);
	}
}

function createFakeFooter() {
	let containerClass = document.getElementsByTagName('div')[1];

	let fakeFooter = document.createElement('section');
	fakeFooter.setAttribute('id', 'footer');

	let spanFooter = document.createElement('span');
	spanFooter.classList.add('footer-text');
	spanFooter.textContent = '© Todos los derechos no reservados han hecho posible la creación de esta web.';

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

function removeFooter() {
	let idFooter = document.getElementById('footer');

	if (idFooter) {
		idFooter.remove();
	}
}

function gameStart() {
	let divContainer = document.getElementById('psa-page');

	let getElem = document.getElementsByClassName('question');
	if (getElem) {
		getElem[0].remove();
	}

	createGame(divContainer);
}

function createGame(father) {
	let divQuiz = document.createElement('div');
	divQuiz.setAttribute('class', 'quiz-container');

	let divHeader = document.createElement('div');
	let titleHeader = document.createElement('h1');
	titleHeader.textContent = '¡QUIZ DICES!';

	let divQuestion = document.createElement('div');
	
	let listOptions = document.createElement('div');
	listOptions.setAttribute("id", "opts")

	divHeader.appendChild(titleHeader);
	divQuestion.appendChild(listOptions);

	divQuiz.appendChild(divHeader); /* Contain h1 -> Quiz Dices y contador de preguntas*/
	divQuiz.appendChild(divQuestion);

	father.appendChild(divQuiz);
	doingListContent();
}

goTo('home');
