// function autoSlide() {
//     const slides = document.querySelectorAll('.item');
//     let currentSlide = 0;

//     setInterval(() => {
//         slides[currentSlide].classList.remove('active');
//         currentSlide = (currentSlide + 1) % slides.length;
//         slides[currentSlide].classList.add('active');
//     }, 3000); // تغيير الشريحة كل 3 ثواني
// }

// autoSlide();
// let nextbtn = document.querySelector(".next");
// let prevbtn = document.querySelector(".previous");
// let slider = document.querySelector(".slider");
// let sliderlist = document.querySelector(".list");
// let thumbnail = document.querySelector(".thumbnail");
// let thumbnailitem = document.querySelectorAll(".item");
// thumbnail.appendChild(thumbnailitem[0]);
// nextbtn.onclick = function() {
//     moveslider("next")
// };
// prevbtn.onclick = function() {
//     moveslider("prev")
// }

// function moveslider(direction) {
//     let slideritem = sliderlist.querySelectorAll("item")
//     let thumbnailitem = document.querySelectorAll(".thumbnail .item")
//     if (direction === "next") {
//         sliderlist.appendChild(slideritem[0])
//         thumbnail.appendChild(thumbnailitem[0])
//         slider.classList.add("next")


//     } else {
//         sliderlist.prepend(slideritem[slideritem.length - 1]);
//         thumbnail.prepend(thumbnailitem[thumbnailitem.length - 1])
//         slider.classList.add("prev")
//     }
//     slider.addEventListener
// }
const backgrounds = [
    { image: 'url("camara.jpg")', text: 'i love you ' },
    { image: 'url("W58.jpg")', text: 'Every Picture Tells a Story.' },

    { image: 'url("tt.jpg")', text: 'you love me' }
];


let currentIndex = 0;
const slideshowContainer = document.querySelector('.slideshow-container');
const slideshowText = document.getElementById('slideshow-text');

function updateSlideshow() {
    const { image, text } = backgrounds[currentIndex];
    slideshowContainer.style.backgroundImage = image;
    slideshowText.textContent = text;

    currentIndex = (currentIndex + 1) % backgrounds.length;
}

setInterval(updateSlideshow, 5000);

// Start the slideshow
updateSlideshow();

function searchFunction() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    alert("Searching for: " + input);
}