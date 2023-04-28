let element = document.querySelector('.targetelement')

let countTill = new Date("January 01 2024 00:00:01").getTime()

setInterval(() => {

    let nowTime = new Date().getTime()
    let time = countTill - nowTime
    let days = Math.floor(time / (1000 * 60 * 60 * 24))
    let hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    let minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))
    let seconds = Math.floor((time % (1000 * 60)) / 1000)

    console.log(nowTime)

    document.querySelector('.days').innerText = days
    document.querySelector('.hours').innerText = hours
    document.querySelector('.minutes').innerText = minutes
    document.querySelector('.seconds').innerText = seconds


    if (time < 0) {
        element.innerHTML = "Time is up!!!"
    }

}, 1000);





