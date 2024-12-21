const boxs = document.querySelectorAll("#cards")
const options = {}
const observer = new IntersectionObserver((entries) => {
        entries.forEach(el => {
            el.target.classList.toggle("slide", el.isIntersecting)
        })
    },
    options)
boxs.forEach(box => {
    observer.observe(box)
})

const sec = document.querySelectorAll(".sec-section")
const section = {}
const sect = new IntersectionObserver((entriesr) => {
        entriesr.forEach(eld => {
            eld.target.classList.toggle("secs", eld.isIntersecting)
        })
    },
    section)
sec.forEach(boxm => {
    sect.observe(boxm)
})





const cardss = document.querySelectorAll("#cardss")


const card = {}
const carde = new IntersectionObserver((entries) => {
        entries.forEach(elm => {
            elm.target.classList.toggle("slides", elm.isIntersecting)
        })
    },
    card)
cardss.forEach(boxs => {
    carde.observe(boxs)
})
const car = document.querySelectorAll("#car")


const cars = {}
const carss = new IntersectionObserver((entriess) => {
        entriess.forEach(elms => {
            elms.target.classList.toggle("slider", elms.isIntersecting)
        })
    },
    cars)
car.forEach(boxsr => {
    carss.observe(boxsr)
})
let darks = document.querySelector(".darks")
let lights = document.querySelector(".lights")
let news = document.querySelector(".news")

darks.addEventListener("click", function() {
    document.body.style.backgroundColor = 'black'
    document.body.style.color = "white"
    news.style.color = "white"
    darks.classList.add("hide")
    lights.classList.remove("hide")


})
lights.addEventListener("click", function() {
    document.body.style.backgroundColor = 'white'
    document.body.style.color = "black"
    news.style.color = "black"
    lights.classList.add("hide")
    darks.classList.remove("hide")


})
let btns = document.getElementById("btns")
window.addEventListener("scroll", function() {
    if (this.scrollY >= 400) {
        btns.style.display = "block"

    } else if (this.scrollY <= 400) {
        btns.style.display = "none"
    } else {
        btns.style.backgroundColor = "red"
        btns.style.color = "white"

    }
})