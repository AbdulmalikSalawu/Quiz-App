var rightSong = new Audio("sound_right.mp3");
var wrongSong = new Audio("sound_wrong.mp3");

// var countDown =()=>{
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
//         setTimeout(() => {
//             location.reload()
//         }, 1150);
//     }
// }

var award = 5000
//CABCAB...
const fifty=()=>{
    blue.innerHTML = "&nbsp &nbsp &nbsp &nbsp"
    red.innerHTML = "&nbsp &nbsp &nbsp &nbsp"
}

function checkQuestion(questionArray) {
    disp.innerHTML = `
        A. <button class ="btn btn-black mt-4 text-white fw-bold border-none fs-5" onclick="optA()"><p id="blue">${questionArray[0].firstOption}</p></button>
        B. <button class ="btn btn-black mt-4 text-white fw-bold border-none fs-5" onclick="optB()"><p id="red">${questionArray[0].secondOption}</p></button>
        C. <button class ="btn btn-black mt-4 text-white fw-bold border-none fs-5" onclick="optC()"><p id="green">${questionArray[0].thirdOption}</p></button>
        D. <button class ="btn btn-black mt-4 text-white fw-bold border-none fs-5" onclick="optD()"><p id="yellow">${questionArray[0].fourthOption}</p></button>
        `
        questionShow.innerHTML = `${questionArray[0].mainQuestion}`
        gameOver.innerHTML = "Goodluck 😎"
        gameOver.style.color = "green"
        startQuiz.innerHTML = "End Quiz"
        countDown()
        questionArray.map((userquestions, index)=>{
    
    })
}

function optA(){
    blue.innerHTML = "WRONG"
    blue.style.background = "red"
    wrongSong.play()
    gameOver.innerHTML = "GAME OVER😪" 
    gameOver.style.color = "red"
    setTimeout(() => {
        location.reload()
    }, 2100);
}
function optB() {
    red.innerHTML = "WRONG"
    red.style.background = "red"
    wrongSong.play()
    gameOver.innerHTML = "GAME OVER😪"
    gameOver.style.color = "red"
    setTimeout(() => {
        location.reload()
    }, 2100);
}
function optC(questionArray){
    myAward.innerHTML = `$ ${award}`
    green.innerHTML = "CORRECT"
    green.style.background = "green"
    rightSong.play()
    var countDown =()=>{
        secs.value = 15
    }
    setTimeout(() => {
        disp.innerHTML = `
        A. <button class ="btn btn-black mt-4 text-white fw-bold border-none fs-5" onclick="optC2(questionArray)"><p id="green">${questionArray[1].firstOption}</p></button>
        B. <button class ="btn btn-black mt-4 text-white fw-bold border-none fs-5" onclick="optB()"><p id="red">${questionArray[1].secondOption}</p></button>
        C. <button class ="btn btn-black mt-4 text-white fw-bold border-none fs-5" onclick="optA()"><p id="blue">${questionArray[1].thirdOption}</p></button>
        D. <button class ="btn btn-black mt-4 text-white fw-bold border-none fs-5" onclick="optD()"><p id="yellow">${questionArray[1].fourthOption}</p></button>
        ` 
        questionShow.innerHTML = `${questionArray[1].mainQuestion}`
        
        countDown()
    }, 1000);
    }
    function optC2(questionArray){
        myAward.innerHTML = `$ ${award+5000}`
        green.innerHTML = "CORRECT"
        green.style.background = "green"
        rightSong.play()
        var countDown =()=>{
            secs.value = 15
        }
        setTimeout(() => {
            disp.innerHTML = `
            A. <button class ="btn btn-black mt-4 text-white fw-bold border-none fs-5" onclick="optA()"><p id="blue">${questionArray[2].firstOption}</p></button>
            B. <button class ="btn btn-black mt-4 text-white fw-bold border-none fs-5" onclick="optC3(questionArray)"><p id="green">${questionArray[2].secondOption}</p></button>
            C. <button class ="btn btn-black mt-4 text-white fw-bold border-none fs-5" onclick="optB()"><p id="red">${questionArray[2].thirdOption}</p></button>
            D. <button class ="btn btn-black mt-4 text-white fw-bold border-none fs-5" onclick="optD()"><p id="yellow">${questionArray[2].fourthOption}</p></button>
            `
            questionShow.innerHTML = `${questionArray[2].mainQuestion}`
            countDown()
        }, 1000);
            }

    function optC3(questionArray){
        myAward.innerHTML = `$ ${award+15000}`
        green.innerHTML = "CORRECT"
        green.style.background = "green"
        rightSong.play()
        var countDown =()=>{
            secs.value = 15
        }
        setTimeout(() => {
            disp.innerHTML = `
            A. <button class ="btn btn-black mt-4 text-white fw-bold border-none fs-5" onclick="optA()"><p id="blue">${questionArray[3].firstOption}</p></button>
            B. <button class ="btn btn-black mt-4 text-white fw-bold border-none fs-5" onclick="optB()"><p id="red">${questionArray[3].secondOption}</p></button>
            C. <button class ="btn btn-black mt-4 text-white fw-bold border-none fs-5" onclick="optC4(questionArray)"><p id="green">${questionArray[3].thirdOption}</p></button>
            D. <button class ="btn btn-black mt-4 text-white fw-bold border-none fs-5" onclick="optD()"><p id="yellow">${questionArray[3].fourthOption}</p></button>
            `
            questionShow.innerHTML = `${questionArray[3].mainQuestion}`
                countDown()
                }, 1000);
            }

    function optC4(questionArray){
        myAward.innerHTML = `$ ${award+45000}`
        green.innerHTML = "CORRECT"
        green.style.background = "green"
        rightSong.play()
        var countDown =()=>{
            secs.value = 15
        }
        setTimeout(() => {
            disp.innerHTML = `
            A. <button class ="btn btn-black mt-4 text-white fw-bold border-none fs-5" onclick="optC5(questionArray)"><p id="green">${questionArray[4].firstOption}</p></button>
            B. <button class ="btn btn-black mt-4 text-white fw-bold border-none fs-5" onclick="optB()"><p id="red">${questionArray[4].secondOption}</p></button>
            C. <button class ="btn btn-black mt-4 text-white fw-bold border-none fs-5" onclick="optA()"><p id="blue">${questionArray[4].thirdOption}</p></button>
            D. <button class ="btn btn-black mt-4 text-white fw-bold border-none fs-5" onclick="optD()"><p id="yellow">${questionArray[4].fourthOption}</p></button>
            `
            questionShow.innerHTML = `${questionArray[4].mainQuestion}`
                countDown()
                }, 1000);
            }
    
    function optC5(questionArray){
        myAward.innerHTML = `$ ${award+70000}`
        green.innerHTML = "CORRECT"
        green.style.background = "green"
        rightSong.play()
        var countDown =()=>{
            secs.value = 15
        }
        setTimeout(() => {
            disp.innerHTML = `
            A. <button class ="btn btn-black mt-4 text-white fw-bold border-none fs-5" onclick="optB()"><p id="blue">${questionArray[5].firstOption}</p></button>
            B. <button class ="btn btn-black mt-4 text-white fw-bold border-none fs-5" onclick="optC6(questionArray)"><p id="green">${questionArray[5].secondOption}</p></button>
            C. <button class ="btn btn-black mt-4 text-white fw-bold border-none fs-5" onclick="optA()"><p id="red">${questionArray[5].thirdOption}</p></button>
            D. <button class ="btn btn-black mt-4 text-white fw-bold border-none fs-5" onclick="optD()"><p id="yellow">${questionArray[5].fourthOption}</p></button>
            `
            questionShow.innerHTML = `${questionArray[5].mainQuestion}`
                countDown()
                 }, 1000);
            }

    function optC6(){
        rightSong.play()
        myAward.innerHTML = `$ ${award+95000}`
        setTimeout(() => {
            gameOver.innerHTML = ""
            questionShow.innerHTML = ""
            disp.innerHTML = `
                <h3>CONGRATULATIONS!!🥇🎉 You won 100,000 Naira</h3>
            `
        }, 1000);
    }

function optD(){
    yellow.innerHTML = "WRONG"
    yellow.style.background = "red"
    wrongSong.play()
    gameOver.innerHTML = "GAME OVER😪"
    gameOver.style.color = "red"
    setTimeout(() => {
        location.reload()
    }, 2100);
}