const quizData = [
	{
		question:"What is JavaScript?",
		a: "JavaScript is a scripting language used to make the website interactive",
        b: "JavaScript is a compiled language used to make the website interactive",
		c: "JavaScript is a compiled language used to make the website interactive",
		d: "None of these",
		correct:"a",
	},
	{
		question:"Javascript is an _______ language?",
        a: "object-oriented",
		b: "object-Based",
		c: "Procedural",
		d: "None of these",
		correct:"a"
	},
	{
		question:"Which of the following keywords is used to define a variable in Javascript?",
		a: "var",
		b: "let",
		c: "const",
		d: "All of the above",
		correct:"d"
	},
	{
		question:"Which of the following methods can be used to display data in some form using Javascript?",
		a: "document.write()",
		b: "console.log()",
		c: "window.alert()",
		d: "All of the above",
		correct:"b",
	},
	{
		question:"What year was JavaScript Launched?",
		a: "1996",
		b: "1995",
		c: "1994",
		d: "none of the above",
		correct:"b",
	},
	{
		question:"Which of the following is not a Javascript framework?",
		a: "React",
		b: "Node",
		c: "Vus",
		d: "cassandra",
		correct:"d",
	},
	{
		question:"Which of the following is not an error in JavaScript?",
		a: "Missing of Bracket",
		b: "Division by zero",
		c: "Syntax error",
		d: "Missing of semicolons",
		correct:"b",
	},
	{
       question:"Why JavaScript Engine is needed?",
	   a: "Both Compiling & Interpreting the JavaScript",
	   b: "Parsing the javascript",
	   c: "Interpreting the JavaScript",
	   d: "Compiling the JavaScript",
	   correct:"c",
	},
	{
		question:"Which of the following are not server-side Javascript objects?",
		a: "Date",
		b: "Fileupload",
		c: "setTimeOut",
		d: "None of the above",
		correct:"b"
	},
	{
		question:"When an operator’s value is NULL, the typeof returned by the unary operator is?",
		a: "Object",
		b: "Boolean",
		c: "undefined",
		d: "Integer",
		correct: "a",
	}
];
const quiz=document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0;
let score = 0;
loadQuiz()
function loadQuiz(){
	deselectAnswers()
	const currentQuizData = quizData[currentQuiz]
	questionEl.innerText = currentQuizData.question
	a_text.innerText = currentQuizData.a
	b_text.innerText = currentQuizData.b
	c_text.innerText = currentQuizData.c
	d_text.innerText = currentQuizData.d
}
function deselectAnswers(){
	answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected(){
	let answer
	answerEls.forEach(answerEl => {
		if(answerEl.checked){
			answer = answerEl.id
		}
	})
	return answer
}
submitBtn.addEventListener('click', () => {
	const answer = getSelected()
	if(answer){
		if (answer === quizData[currentQuiz].correct){
			score++
		}
		currentQuiz++
		if(currentQuiz < quizData.length){
			loadQuiz()
		}else {
			quiz.innerHTML = `
			<h2>You answered ${score}/${quizData.length} questions correctly</h2>
			<button onclick="location.reload()">Reload</button>
			`
			
		}
	}
})