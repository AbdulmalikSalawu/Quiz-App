var allQuestions = []
if(localStorage.quizQuestions){
    allQuestions = JSON.parse(localStorage.getItem("quizQuestions"))
}
const saveQuestion = ()=>{
    var questionObject = {
        myQuestion: Question.value,
        firstOption:optionA.value,
        secondOption:optionB.value,
        thirdOption:optionC.value,
        fourthOption:optionD.value 
    }
    if((firstOption=optionA.value) && (secondOption = optionB.value) && (thirdOption = optionC.value) && (fourthOption = optionD.value))
    {
        allQuestions.push(questionObject), 
        localStorage.setItem("quizQuestions", JSON.stringify(allQuestions))
    }
}
const checkQuestion = ()=>{
    allQuestions = JSON.parse(localStorage.getItem("quizQuestions"))
    allQuestions.map((_, ind)=>{
    questionShow.innerHTML = `${allQuestions[0].myQuestion}`
    disp.innerHTML = `
        A. <button onclick="optA()"><p id="blue">${allQuestions[0].firstOption}</p></button>
        B. <button onclick="optB()"><p id="red">${allQuestions[0].secondOption}</p></button>
        C. <button onclick="optC()"><p id="green">${allQuestions[0].thirdOption}</p></button>
        D. <button onclick="optD()"><p id="yellow">${allQuestions[0].fourthOption}</p></button>
        `
    })
}

function optA(){
    blue.innerHTML = "WRONG"
    blue.style.background = "red"
}
function optB() {
    red.innerHTML = "WRONG"
    red.style.background = "red"
}
function optC(){
    green.innerHTML = "CORRECT"
    green.style.background = "green"

    setTimeout(() => {
        questionShow.innerHTML = `${allQuestions[1].myQuestion}`
        disp.innerHTML = `
            A. <button onclick="optA()"><p id="blue">${allQuestions[1].firstOption}</p></button>
            B. <button onclick="optB()"><p id="red">${allQuestions[1].secondOption}</p></button>
            C. <button onclick="optC2()"><p id="green">${allQuestions[1].thirdOption}</p></button>
            D. <button onclick="optD()"><p id="yellow">${allQuestions[1].fourthOption}</p></button>
            ` 
        }, 1000);
        // optA()
        // optB()
        // optD()
    }
    function optC2(){
        green.innerHTML = "CORRECT"
        green.style.background = "green"
        setTimeout(() => {
            questionShow.innerHTML = `${allQuestions[2].myQuestion}`
            disp.innerHTML = `
                A. <button onclick="optA()"><p id="blue">${allQuestions[2].firstOption}</p></button>
                B. <button onclick="optB()"><p id="red">${allQuestions[2].secondOption}</p></button>
                C. <button onclick="optC3()"><p id="green">${allQuestions[2].thirdOption}</p></button>
                D. <button onclick="optD()"><p id="yellow">${allQuestions[2].fourthOption}</p></button>
                    `
                }, 1000);
            }

function optD(){
    yellow.innerHTML = "WRONG"
    yellow.style.background = "red"
}