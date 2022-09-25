
var rightSong = new Audio("sound_right.mp3");
var wrongSong = new Audio("sound_wrong.mp3");

var countDown =()=>{
    let countedSecs = secs.value;
    countedSecs-- ;
    secs.value =  countedSecs
    myTimeout = setTimeout(countDown, 1000)
    if(countedSecs==0){
        gameOver.innerHTML = "Time Up"
        gameOver.style.color = "red"
        secs.value = "00"
        secs.style.color = "red"
        clearInterval(myTimeout)
        setTimeout(() => {
            window.location.href = "index.html"
        }, 1250);
    }
}

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
        gameOver.innerHTML = "Goodluck"
        gameOver.style.color = "green"
        gameOver.style.background = "white"
        startQuiz.innerHTML = "End Quiz"
        countDown()
}
 function endQuiz(){
     window.location.href = "index.html"
 }
function optA(){
    blue.innerHTML = "Game Over"
    blue.style.background = "red"
    wrongSong.play()
    gameOver.innerHTML = "WRONG😪" 
    gameOver.style.color = "red"
    gameOver.style.fontsize = "10px"
    setTimeout(() => {
        window.location.href = "index.html"
    }, 2800);
}
function optB() {
    red.innerHTML = "WRONG"
    red.style.background = "red"
    wrongSong.play()
    gameOver.innerHTML = "GAME OVER😪"
    gameOver.style.color = "red"
    setTimeout(() => {
        window.location.href = "index.html"
    }, 2800);
}
function optC(){
    myAward.innerHTML = `$ ${award}`
    green.innerHTML = "CORRECT"
    green.style.background = "green"
    rightSong.play()
    var countDown =()=>{
        secs.value = 15
    }
    setTimeout(() => {
            disp.innerHTML = `
            A. <button class ="btn btn-black mt-4 text-white fw-bold border-none fs-5" onclick="optC2()"><p id="green">Ms Word</p></button>
            B. <button class ="btn btn-black mt-4 text-white fw-bold border-none fs-5" onclick="optB()"><p id="red">JavaScript</p></button>
            C. <button class ="btn btn-black mt-4 text-white fw-bold border-none fs-5" onclick="optA()"><p id="blue">Python</p></button>
            D. <button class ="btn btn-black mt-4 text-white fw-bold border-none fs-5" onclick="optD()"><p id="yellow">Java</p></button>
            ` 
            questionShow.innerHTML = `Which is not a programming language?`
            
            countDown()
        }, 1600);
    }
    function optC2(){
        myAward.innerHTML = `$ ${award+5000}`
        green.innerHTML = "CORRECT"
        green.style.background = "green"
        rightSong.play()
        var countDown =()=>{
            secs.value = 15
        }
        setTimeout(() => {
            disp.innerHTML = `
            A. <button class ="btn btn-black mt-4 text-white fw-bold border-none fs-5" onclick="optA()"><p id="blue">306</p></button>
            B. <button class ="btn btn-black mt-4 text-white fw-bold border-none fs-5" onclick="optC3()"><p id="green">206</p></button>
            C. <button class ="btn btn-black mt-4 text-white fw-bold border-none fs-5" onclick="optB()"><p id="red">106</p></button>
            D. <button class ="btn btn-black mt-4 text-white fw-bold border-none fs-5" onclick="optD()"><p id="yellow">406</p></button>
            `
            questionShow.innerHTML = `How many bones are there in the human body?`
            countDown()
        }, 1600);
            }

    function optC3(){
        myAward.innerHTML = `$ ${award+15000}`
        green.innerHTML = "CORRECT"
        green.style.background = "green"
        rightSong.play()
        var countDown =()=>{
            secs.value = 15
        }
        setTimeout(() => {
            disp.innerHTML = `
            A. <button class ="btn btn-black mt-4 text-white fw-bold border-none fs-5" onclick="optA()"><p id="blue">Six</p></button>
            B. <button class ="btn btn-black mt-4 text-white fw-bold border-none fs-5" onclick="optB()"><p id="red">Seven</p></button>
            C. <button class ="btn btn-black mt-4 text-white fw-bold border-none fs-5" onclick="optC4()"><p id="green">Eight</p></button>
            D. <button class ="btn btn-black mt-4 text-white fw-bold border-none fs-5" onclick="optD()"><p id="yellow">Nine</p></button>
            `
            questionShow.innerHTML = `How many legs does a spider have?`
                countDown()
                }, 1600);
            }

    function optC4(){
        myAward.innerHTML = `$ ${award+45000}`
        green.innerHTML = "CORRECT"
        green.style.background = "green"
        rightSong.play()
        var countDown =()=>{
            secs.value = 15
        }
        setTimeout(() => {
            disp.innerHTML = `
            A. <button class ="btn btn-black mt-4 text-white fw-bold border-none fs-5" onclick="optC5()"><p id="green">Rome</p></button>
            B. <button class ="btn btn-black mt-4 text-white fw-bold border-none fs-5" onclick="optB()"><p id="red">Sydney</p></button>
            C. <button class ="btn btn-black mt-4 text-white fw-bold border-none fs-5" onclick="optA()"><p id="blue">New York</p></button>
            D. <button class ="btn btn-black mt-4 text-white fw-bold border-none fs-5" onclick="optD()"><p id="yellow">Texas</p></button>
            `
            questionShow.innerHTML = `Which city name is present in every continent?`
                countDown()
                }, 1600);
            }
    
    function optC5(){
        myAward.innerHTML = `$ ${award+70000}`
        green.innerHTML = "CORRECT"
        green.style.background = "green"
        rightSong.play()
        var countDown =()=>{
            secs.value = 15
        }
        setTimeout(() => {
            disp.innerHTML = `
            A. <button class ="btn btn-black mt-4 text-white fw-bold border-none fs-5" onclick="optB()"><p id="blue">Worm</p></button>
            B. <button class ="btn btn-black mt-4 text-white fw-bold border-none fs-5" onclick="optC6()"><p id="green">Snake</p></button>
            C. <button class ="btn btn-black mt-4 text-white fw-bold border-none fs-5" onclick="optA()"><p id="red">Jaguar</p></button>
            D. <button class ="btn btn-black mt-4 text-white fw-bold border-none fs-5" onclick="optD()"><p id="yellow">Cow</p></button>
            `
            questionShow.innerHTML = `What animal is the black mamba?`
                countDown()
                 }, 1600);
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
        window.location.href = "index.html"
    }, 2800);
}