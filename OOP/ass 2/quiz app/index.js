/*We will be creating a quiz app in this section step-by-step. Follow the steps below and complete on by one

Quiz is a collection of Questions.
Question will need Title, Options and Correct Answer
Make a Question class with these data and methods:
DATA:

Title of the question
Options of the question
Correct answer
METHODS:

isCorrect(answer)
Check if the given answer is correct or not. It will accept one answer and return true is the answer is correct otherwise false.

getCorrectAnswer() This method will return the correct answer of the question.

createUI (this will create the layout of a single question)

This method will decide how the UI of a question look like. Calling this function should add the UI in the DOM.

Make quiz class with these data and properties
DATA:

allQuestions Collection of Questions. An array with multiple question.
activeIndex Index of the active visible question
score Total number of correct answer
METHOD:

nextQuestion() This method should get the next question.
createUI This will create the ui of the whole app.
updateScore This method will update the score.*/

const quizCollection=[
    {
        title:'What is first Alphabet?',
        options:[
            'A',
            'B',
            'C',
            'D'
        ],
        correctAnsIndex:0,

    },
    {
        title:'What is Capital of india?',
        options:[
            'Delhi',
            'Mumbai',
            'Kolkata',
            'Agra'
        ],
        correctAnsIndex:0,

    },
    {
        title:'Who is father of India?',
        options:[
           
            'Sn Bosh',
            'Mahatma Gandhi',
            'Patil',
            'Mohan'
        ],
        correctAnsIndex:1,

    },

]


let form=document.querySelector('form')
let prev=document.querySelector('.prev')
let next=document.querySelector('.next')
let result=document.querySelector('.show_result')
let p=document.querySelector('p')




class Question{
    constructor(title,options,correctAnsIndex){
        this.title=title
        this.options=options
        this.correctAnsIndex=correctAnsIndex
    }

    isCorrect(answer){
        return answer===this.options[this.correctAnsIndex]
    }

    getCorrectAnswer(){
        return this.options[this.correctAnsIndex]
    }
}

class Quiz{
    constructor(questions=[],score=0){
        this.questions=questions
        this.score=score
        this.activeIndex=0
    }

    
nextQuestion(){
    this.activeIndex=this.activeIndex+1
    this.createUI()
}

prevQuestion(){
    this.activeIndex=this.activeIndex-1
    this.createUI()
}

addQuestion(title,options,answerIndex){
    let question=new Question(title,options,answerIndex)
    this.questions.push(question)
}

handleButton(){
    if(this.activeIndex==0){
        prev.style.visibility='hidden'
    }else if(this.activeIndex===this.questions.length-1){
        next.style.visibility='hidden'
        // result.style.visibility='visible'
    }else{
        next.style.visibility='visible'
        prev.style.visibility='visible'
    }
}


createUI(){
    form.innerHTML=''
    let activeQuestion=this.questions[this.activeIndex]
    let fieldset=document.createElement('fieldset')
    let legend=document.createElement('legend')
    legend.innerText=activeQuestion.title
    let optionsElm=document.createElement('div')
    let buttonDiv=document.createElement('div')
    let button=document.createElement('button')
    button.type='submit'
    button.innerText='submit'
    buttonDiv.append(button)

activeQuestion.options.forEach((option,index) => {

    let input=document.createElement('input')
    input.type='radio'
    input.id=`option-${index}`
    input.value=option
    input.name='option'
    let label=document.createElement('label')
    label.for=`option-${index}`
    label.innerText=option
    label.style.marginLeft='5px'

    form.addEventListener('submit',(event)=>{
        event.preventDefault()
        console.log(input.value,input.checked)
        if(input.checked){
            console.log(activeQuestion.isCorrect(input.value))
            if(activeQuestion.isCorrect(input.value)){
                this.updateScore()
                console.log(this.score)
                result.style.visibility='visible'
            }
        }
    })

    let optionDiv=document.createElement('div')
    optionDiv.classList.add('optionDiv')
    optionDiv.style.marginBottom='10px'
  optionDiv.append(input,label)
    optionsElm.append(optionDiv)
    });

    this.handleButton( )

    p.innerText=`Total Question:${this.questions.length}`
    fieldset.append(legend,optionsElm,buttonDiv)
    form.append(fieldset)
  
   
    return form
}
// updateScore This method will update the score.*/
updateScore(){
    this.score=this.score+1
}


}

let quiz=new Quiz()

quizCollection.forEach(question=>{
    quiz.addQuestion(question.title,question.options,question.correctAnsIndex)
})

quiz.createUI()

next.addEventListener('click',()=>{
    quiz.nextQuestion()

})
prev.addEventListener('click',quiz.prevQuestion.bind(quiz))

result.addEventListener('click',()=>{
    alert(`your score is ${quiz.score}`)
})
