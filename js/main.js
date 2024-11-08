const pages = {
	home: {
		title: '¡QUIZ DICES!',
		content: 'BIENVENIDO TRIVIALERO',
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
	pQuestion.textContent = '¡Bienvenidos al desafío de conocimientos! En este trivial de 10 preguntas, pondremos a prueba tu memoria, agudeza mental y curiosidad sobre diversos temas. Cada pregunta contará con 4 opciones, pero solo una será la correcta. ¡Demuestra tu ingenio y veamos qué tan lejos llegas! Prepárate para disfrutar y aprender mientras te diviertes.';

	let pQuestion2 = document.createElement('p');
	pQuestion2.textContent = '¿Serás capaz de acertar en todas?';

	divQuestion.appendChild(pQuestion);
	lineBreak(divQuestion, 1);
	divQuestion.appendChild(pQuestion2);
	document.getElementsByClassName('home')[0].appendChild(divQuestion);
}

function questionPage() {
	let divQuestion = document.createElement('div');

	let btnPlay = document.createElement('button');
	btnPlay.classList.add('btn-play');
	btnPlay.textContent = "EMPEZAR"

	divQuestion.appendChild(btnPlay);
	document.getElementsByClassName('question')[0].appendChild(divQuestion);
}

function resultsPage() {
	let divQuestion = document.createElement('div');

	let pQuestion = document.createElement('p');
	pQuestion.textContent = 'SE INSERTARÁ UNA GRÁFICA';

	divQuestion.appendChild(pQuestion);

	let divFooter = document.createElement('div');
	divFooter.classList.add('footer');

	let spanFooter = document.createElement('span');
	divFooter.classList.add('footer-text');
	spanFooter.textContent = '© Todos los derechos no reservados han hecho posible la creación de esta web.';

	divFooter.appendChild(spanFooter);

	document.getElementsByClassName('results')[0].appendChild(divQuestion);
	document.getElementsByClassName('results')[0].appendChild(divFooter);
}

function lineBreak(father, manylb) {

	for (let i = 0; i < manylb; i++) {
		let lb = document.createElement('br');

		father.appendChild(lb);
	}
}

goTo('home');