let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

let homeScoreCount = 0

function homeAddOne() {
    homeScoreCount += 1
    homeScore.textContent = homeScoreCount
}

function homeAddTwo() {
    homeScoreCount += 2
    homeScore.textContent = homeScoreCount
}

function homeAddThree() {
    homeScoreCount += 3
    homeScore.textContent = homeScoreCount
}

let guestScoreCount = 0

function guestAddOne() {
    guestScoreCount += 1
    guestScore.textContent = guestScoreCount
}

function guestAddTwo() {
    guestScoreCount += 2
    guestScore.textContent = guestScoreCount
}

function guestAddThree() {
    guestScoreCount += 3
    guestScore.textContent = guestScoreCount
}