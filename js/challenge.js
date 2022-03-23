const counter = document.getElementById("counter")
const minus = document.getElementById("minus")
const plus = document.getElementById("plus")
const heart = document.getElementById("heart")
const pause = document.getElementById("pause")


document.addEventListener('DOMContentLoaded', (e) => {
    e.preventDefault()
    // A Counter that increases by 1 each second
    let INTERVAL_ID = setInterval(timeIncrement, 1000)
    // Plus and Minus buttons that increment or decrement the counter
    minus.addEventListener("click", () => {
        counter.innerText = parseInt(counter.innerText) - 1
    })
    plus.addEventListener("click", () => {
        counter.innerText = parseInt(counter.innerText) + 1
    })
    // A comment box that adds comments when submitted
    let form = document.getElementById("comment-form")
    form.addEventListener("submit", (e) => {
        e.preventDefault()
        let value = document.getElementById("comment-input").value
        createComments(value)
    })
    // Pause the counter
    pause.addEventListener("click", (e) => {
        e.preventDefault()
        let pauseResumeBtn = pause
        if (pauseResumeBtn.innerText == "pause") {
            clearInterval(INTERVAL_ID)
            pauseResumeBtn.innerText = "resume"
            // Disable all buttons except the pause button
            document.getElementById("minus").disabled = true
            document.getElementById("plus").disabled = true
            document.getElementById("heart").disabled = true
            document.getElementById("submit").disabled = true
        } else {
            pauseResumeBtn.innerText = "pause"
            INTERVAL_ID = setInterval(timeIncrement, 1000)
            document.getElementById("minus").disabled = false
            document.getElementById("plus").disabled = false
            document.getElementById("heart").disabled = false
            document.getElementById("submit").disabled = false
        }
    })
    heart.addEventListener("click", (e) => {
        e.preventDefault()
        let likedCountValue = parseInt(counter.innerText)
        let likesUlArr = document.querySelector(".likes")

        let dataNumElems = document.getElementsByName(likedCountValue)
        if (dataNumElems.length != 0) {
            arrOfWords = dataNumElems[0].innerText.split(" ")
            numTimesLiked = parseInt(arrOfWords[4])
            dataNumElems[0].innerText = `${likedCountValue} has been liked ${numTimesLiked + 1} times`
        } else {
            let listElem = document.createElement("li")
            listElem.textContent = `${likedCountValue} has been liked 1 time`
            listElem.setAttribute("name", likedCountValue)
            likesUlArr.appendChild(listElem)
        }
    })
})

function timeIncrement() {
    // See the timer increment every second once the page has loaded.
    counter.innerText = parseInt(counter.innerText) + 1
}

function createComments(comment) {
    let pTag = document.createElement("p")
    pTag.innerText = comment
    let list = document.getElementById("list")
    list.appendChild(pTag)
}
