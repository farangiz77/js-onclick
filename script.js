const btn = document.querySelector("#btn")
const body = document.querySelector("body")
const btn2 = document.querySelector("#btn2")
const btn3 = document.querySelector("#btn3")
const btn4 = document.querySelector("#btn4")
const box = document.querySelector("#box img")
const btn5 = document.querySelector("#btn5")
const box1 = document.querySelector("#box1")



btn.onclick = () => {
    body.classList.add("red")
    body.classList.remove("blue")

}

btn2.onclick = () => {
    body.classList.add("blue")
    body.classList.remove("red")

}

btn3.onclick = () => {
    box.classList.add("open")
    box.classList.remove("close")

    alert('hi')

}

btn4.onclick = () => {
    box.classList.add("close")
    box.classList.remove("open")

}

btn5.onclick = () => {
    box.classList.add("anim")
}

box1.onclick = () => {
    box1.classList.add("open")
    box.classList.add("close")

}

