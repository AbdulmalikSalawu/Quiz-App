var allQuestions = []
if(localStorage.quizQuestions){
    allQuestions = JSON.parse(localStorage.getItem("quizQuestions"))
}
// const countDown =()=>{
//     let countedSecs = secs.value;
//     countedSecs-- ;
//     secs.value =  countedSecs
//     myTimeout = setTimeout(countDown, 1000)
//     if(countedSecs==0){
//         gameOver.innerHTML = "Time Up"
//         gameOver.style.color = "red"
//         secs.value = "00"
//         secs.style.color = "red"
//         clearInterval(myTimeout)
//     }
// }
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
    gameOver.innerHTML = "Goodluck 😎"
    gameOver.style.color = "green"
    countDown()
    allQuestions.map((_, ind)=>{
    questionShow.innerHTML = `${allQuestions[0].myQuestion}`
    disp.innerHTML = `
        A. <button class ="btn btn-info text-black fw-bold border-none fs-5" onclick="optA()"><p id="blue">${allQuestions[0].firstOption}</p></button>
        B. <button class ="btn btn-info text-black fw-bold border-none fs-5" onclick="optB()"><p id="red">${allQuestions[0].secondOption}</p></button>
        C. <button class ="btn btn-info text-black fw-bold border-none fs-5" onclick="optC()"><p id="green">${allQuestions[0].thirdOption}</p></button>
        D. <button class ="btn btn-info text-black fw-bold border-none fs-5" onclick="optD()"><p id="yellow">${allQuestions[0].fourthOption}</p></button>
        `
    })
}

function optA(){
    blue.innerHTML = "WRONG"
    blue.style.background = "red"
    gameOver.innerHTML = "GAME OVER😪" 
    gameOver.style.color = "red"
}
function optB() {
    red.innerHTML = "WRONG"
    red.style.background = "red"
    gameOver.innerHTML = "GAME OVER😪"
    gameOver.style.color = "red"
}
function optC(){
    green.innerHTML = "CORRECT"
    green.style.background = "green"

    setTimeout(() => {
        //countDown()
        questionShow.innerHTML = `${allQuestions[1].myQuestion}`
        disp.innerHTML = `
            A. <button class ="btn btn-info text-black fw-bold border-none fs-5" onclick="optC2()"><p id="green">${allQuestions[1].firstOption}</p></button>
            B. <button class ="btn btn-info text-black fw-bold border-none fs-5" onclick="optB()"><p id="red">${allQuestions[1].secondOption}</p></button>
            C. <button class ="btn btn-info text-black fw-bold border-none fs-5" onclick="optA()"><p id="blue">${allQuestions[1].thirdOption}</p></button>
            D. <button class ="btn btn-info text-black fw-bold border-none fs-5" onclick="optD()"><p id="yellow">${allQuestions[1].fourthOption}</p></button>
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
                A. <button class ="btn btn-info text-black fw-bold border-none fs-5" onclick="optA()"><p id="blue">${allQuestions[2].firstOption}</p></button>
                B. <button class ="btn btn-info text-black fw-bold border-none fs-5" onclick="optC3()"><p id="green">${allQuestions[2].secondOption}</p></button>
                C. <button class ="btn btn-info text-black fw-bold border-none fs-5" onclick="optB()"><p id="red">${allQuestions[2].thirdOption}</p></button>
                D. <button class ="btn btn-info text-black fw-bold border-none fs-5" onclick="optD()"><p id="yellow">${allQuestions[2].fourthOption}</p></button>
                    `
                }, 1000);
            }

    function optC3(){
        green.innerHTML = "CORRECT"
        green.style.background = "green"
        setTimeout(() => {
            questionShow.innerHTML = `${allQuestions[3].myQuestion}`
            disp.innerHTML = `
                A. <button class ="btn btn-info text-black fw-bold border-none fs-5" onclick="optA()"><p id="blue">${allQuestions[3].firstOption}</p></button>
                B. <button class ="btn btn-info text-black fw-bold border-none fs-5" onclick="optB()"><p id="red">${allQuestions[3].secondOption}</p></button>
                C. <button class ="btn btn-info text-black fw-bold border-none fs-5" onclick="optC4()"><p id="green">${allQuestions[3].thirdOption}</p></button>
                D. <button class ="btn btn-info text-black fw-bold border-none fs-5" onclick="optD()"><p id="yellow">${allQuestions[3].fourthOption}</p></button>
                    `
                }, 1000);
            }

    function optC4(){
        green.innerHTML = "CORRECT"
        green.style.background = "green"
        setTimeout(() => {
            questionShow.innerHTML = `${allQuestions[4].myQuestion}`
            disp.innerHTML = `
                A. <button class ="btn btn-info text-black fw-bold border-none fs-5" onclick="optC5()"><p id="green">${allQuestions[4].firstOption}</p></button>
                B. <button class ="btn btn-info text-black fw-bold border-none fs-5" onclick="optB()"><p id="red">${allQuestions[4].secondOption}</p></button>
                C. <button class ="btn btn-info text-black fw-bold border-none fs-5" onclick="optA()"><p id="blue">${allQuestions[4].thirdOption}</p></button>
                D. <button class ="btn btn-info text-black fw-bold border-none fs-5" onclick="optD()"><p id="yellow">${allQuestions[4].fourthOption}</p></button>
                    `
                }, 1000);
            }
    
    function optC5(){
        green.innerHTML = "CORRECT"
        green.style.background = "green"
        setTimeout(() => {
            questionShow.innerHTML = `${allQuestions[5].myQuestion}`
            disp.innerHTML = `
                A. <button class ="btn btn-info text-black fw-bold border-none fs-5" onclick="optB()"><p id="blue">${allQuestions[5].firstOption}</p></button>
                B. <button class ="btn btn-info text-black fw-bold border-none fs-5" onclick="optC6()"><p id="green">${allQuestions[5].secondOption}</p></button>
                C. <button class ="btn btn-info text-black fw-bold border-none fs-5" onclick="optA()"><p id="red">${allQuestions[5].thirdOption}</p></button>
                D. <button class ="btn btn-info text-black fw-bold border-none fs-5" onclick="optD()"><p id="yellow">${allQuestions[5].fourthOption}</p></button>
                    `
                 }, 1000);
            }

    function optC6(){
        setTimeout(() => {
            gameOver.innerHTML = ""
            questionShow.innerHTML = ""
            disp.innerHTML = `
                <h3>CONGRATULATIONS!!🥇🎉 You won 1million Naira</h3>
            `
        }, 500);
    }

function optD(){
    yellow.innerHTML = "WRONG"
    yellow.style.background = "red"
    gameOver.innerHTML = "GAME OVER😪"
    gameOver.style.color = "red"
}