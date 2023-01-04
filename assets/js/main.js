const timer = document.querySelector('.timer')
const start = document.querySelector('.start')
const pause = document.querySelector('.pause')
const reset = document.querySelector('.reset')
let seconds = 0
let startCount;

function getTimeFromSeconds(seconds) {
    const date = new Date(seconds * 1000)
    return date.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    })
}

function startTimer() {
    clearInterval(startCount)
    startCount = setInterval(function() {
        seconds++
        timer.innerHTML = getTimeFromSeconds(seconds)
    }, 1000)

    start.classList.add('started')
    pause.classList.remove('paused')
    reset.classList.remove('reseted')
    removeClasses()
}

function pauseTimer() {
    clearInterval(startCount)

    pause.classList.add('paused')
    start.classList.remove('started')
    reset.classList.remove('reseted')
    removeClasses()
}

function resetTimer() {
    clearInterval(startCount)
    timer.innerHTML = '00:00:00'
    seconds = 0

    reset.classList.add('reseted')
    start.classList.remove('started')
    pause.classList.remove('paused')
    removeClasses()
}

function removeClasses(){
    setTimeout (() => {
        start.classList.remove('started')
        reset.classList.remove('reseted')
    }, 5000)
}

start.addEventListener('click', startTimer)
pause.addEventListener('click', pauseTimer)
reset.addEventListener('click', resetTimer)

