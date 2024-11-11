async function getTrivialData() {
	let response = await fetch('https://opentdb.com/api.php?amount=1&difficulty=medium&type=multiple');
	let data = await response.json();

	return data;
}

getTrivialData()
	.then(data => {
		let category = data["results"][0].category;
		console.log("category: ", category);

		let question = data["results"][0].question;
		console.log("question: ", question);

		let correctAnswer = data["results"][0].correct_answer;
		console.log("correct: ", correctAnswer);

		let incorrectAnswer = data["results"][0].incorrect_answers;
		console.log("incorrect: ", incorrectAnswer);
	})
	.catch(error => console.log("error: " + error));