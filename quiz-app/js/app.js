const questions = [{
    'que':'What is  HTML ',
    'a':'Markup language',
    'b':'Server language',
    'c':'Programming language',
    'd':'none',
    'correct':'a'
},
{
    'que':"PHP stands for",
    'a':'Hypertext preprocessor',
    'b':'Web development',
    'c':'Backend language',
    'd':'none',
    'correct':'a'
},
{
    'que':"Father of php",
    'a':'James gosling',
    'b':'James bond',
    'c':'will smith',
    'd':'Rasmus lerdorf',
    'correct':'d'
}

]
let index = 0;
let total = questions.length;
let right = 0;
let wrong = 0;
const quesBox = document.getElementById("quesBox")
const optionInputs = document.querySelectorAll('.option')
const loadQuestion = () => {
    if(index === total){
        return endQuiz()
    }
    reset()
    const data = questions[index]
  
    quesBox.innerText =  `${index+1})  ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
}
//submit answer
const submit = () => {
    const data = questions[index];
    const ans = getAnswer()
    if(ans === data.correct){
        right++;
    }else{
        wrong--;
    }
    index++;
    loadQuestion();
    return;
}
//for checked answer
const getAnswer = () => {
    let answer;
        optionInputs.forEach(
            (input) => {
                if(input.checked){
                   answer = input.value;
                }
            }
        )
        return answer;
}
const reset = () => {
    optionInputs.forEach(
        (input) => {
            input.checked = false;
        }
    )
}

//end quiz
const endQuiz = () => {
    document.getElementById("box").innerHTML = `
    <div style="style-align:center">
    <h2> Thank you for playing the quiz </h3>
    <h2> ${right} / ${total} are correct </h2>
    </div> `
}


//initial call
loadQuestion();
