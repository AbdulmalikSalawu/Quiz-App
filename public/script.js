var rightSong = new Audio("sound_right.mp3");
var wrongSong = new Audio("sound_wrong.mp3");

var countDown =()=>{
    let countedSecs = secs.value;
    countedSecs-- ;
    secs.value =  countedSecs
    myTimeout = setTimeout(countDown, 1000)
    if(countedSecs==0){
        gameOver.innerHTML = "Timeup"
        gameOver.style.color = "red"
        secs.value = "00"
        secs.style.color = "red"
        clearInterval(myTimeout)
        setTimeout(() => {
            window.location.href = "index.html"
        }, 3100);
    }
}
var award = 5000
const fifty=()=>{
    blue.innerHTML = "&nbsp &nbsp &nbsp &nbsp"
    red.innerHTML = "&nbsp &nbsp &nbsp &nbsp"
    fiftyfifty.innerHTML = `<img src = "50-50-used.png" alt = "">`
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
    }, 3200);
}
function optB() {
    red.innerHTML = "WRONG"
    red.style.background = "red"
    wrongSong.play()
    gameOver.innerHTML = "Gameover😪"
    gameOver.style.color = "red"
    setTimeout(() => {
        window.location.href = "index.html"
    }, 3200);
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
            A. <button class ="btn btn-black mt-4 text-white fw-bold border-none fs-5" onclick="optC2()"><p id="green">
            The Nile</p></button>
            B. <button class ="btn btn-black mt-4 text-white fw-bold border-none fs-5" onclick="optB()"><p id="red">Limpopo</p></button>
            C. <button class ="btn btn-black mt-4 text-white fw-bold border-none fs-5" onclick="optA()"><p id="blue">Mississipi</p></button>
            D. <button class ="btn btn-black mt-4 text-white fw-bold border-none fs-5" onclick="optD()"><p id="yellow">Cairo River</p></button>
            ` 
            questionShow.innerHTML = `What's the name of the river that runs through Egypt?
            `
            
            countDown()
        }, 2000);
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
        }, 2000);
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
            A. <button class ="btn btn-black mt-4 text-white fw-bold border-none fs-5" onclick="optA()"><p id="blue">England</p></button>
            B. <button class ="btn btn-black mt-4 text-white fw-bold border-none fs-5" onclick="optB()"><p id="red">Nigeria</p></button>
            C. <button class ="btn btn-black mt-4 text-white fw-bold border-none fs-5" onclick="optC4()"><p id="green">France</p></button>
            D. <button class ="btn btn-black mt-4 text-white fw-bold border-none fs-5" onclick="optD()"><p id="yellow">China</p></button>
            `
            questionShow.innerHTML = `The Statue of Liberty was given to the US by which country?`
                countDown()
                }, 2000);
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
                }, 1800);
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
                 }, 1800);
            }
    function optC6(){
        myAward.innerHTML = `$ ${award+95000}`
        green.innerHTML = "CORRECT"
        green.style.background = "green"
        rightSong.play()
        var countDown =()=>{
            secs.value = 15
        }
        setTimeout(() => {
            disp.innerHTML = `
            A. <button class ="btn btn-black mt-4 text-white fw-bold border-none fs-5" onclick="optB()"><p id="blue">Darkness</p></button>
            B. <button class ="btn btn-black mt-4 text-white fw-bold border-none fs-5" onclick="optC7()"><p id="green">Constipation</p></button>
            C. <button class ="btn btn-black mt-4 text-white fw-bold border-none fs-5" onclick="optA()"><p id="red">Open Space</p></button>
            D. <button class ="btn btn-black mt-4 text-white fw-bold border-none fs-5" onclick="optD()"><p id="yellow">Cobras</p></button>
            `
            questionShow.innerHTML = `Coprastastaphobia Is The Fear Of What?`
                countDown()
                 }, 1800);
            }

    function optC7(){
        rightSong.play()
        myAward.innerHTML = `$ ${award+195000}`
        setTimeout(() => {
            gameOver.innerHTML = ""
            questionShow.innerHTML = ""
            disp.innerHTML = `
                <h3>CONGRATULATIONS!!🥇🎉 You won 200,000 Naira</h3>
            `
            disp.style.fontsize = "25px"
        }, 1000);
    }
function optD(){
    yellow.innerHTML = "WRONG"
    yellow.style.background = "red"
    wrongSong.play()
    gameOver.innerHTML = "Gameover😪"
    gameOver.style.color = "red"
    setTimeout(() => {
        window.location.href = "index.html"
    }, 3300);
}