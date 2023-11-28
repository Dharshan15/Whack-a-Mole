const timeleft = document.querySelector('#time')
const scoreDisplay =document.querySelector('#score')
const squares =document.querySelectorAll('.square')

let molePositions
let score = 0
let currentTime = 60
let countDownTimerId
let moleTimerId

function moveMole () { 
    moleTimerId = setInterval(function() {
       squares.forEach(square => square.classList.remove('mole'))
       const randomSquare = squares[Math.floor(Math.random() * squares.length)]
       randomSquare.classList.add('mole')

       molePositions= randomSquare.id
    }, 500)
}
moveMole()



squares.forEach(square => square.addEventListener('click',function (){
    if (square.id === molePositions)
       score++
       scoreDisplay.innerHTML = score 
}))

function countDown()  {
    currentTime--
    timeleft.innerHTML = currentTime

    if (currentTime ===0) {
        clearInterval(countDownTimerId)
        clearInterval(moleTimerId)
    }
}

countDownTimerId = setInterval(countDown,1000)