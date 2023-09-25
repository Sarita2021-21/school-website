// flash news slider 
const flashes = document.querySelectorAll('.flash-container div')
let i = 1

setInterval(() => {
    i++
    const flash = document.querySelector('.flash-container .change')
    flash.classList.remove("change")
    if (i > flashes.length) {
        flashes[0].classList.add('change')
        i = 1;
    }
    else {
        flash.nextElementSibling.classList.add('change')
    }

}, 2000);

// flash news silder ends here



// start slideshow
const slide = document.querySelectorAll(".slide img");
let j = 1;
setInterval(() => {
    j++;
    const slider = document.querySelector(".slide .change")
    slider.classList.remove('change')
    if (j > slide.length) {
        slide[0].classList.add("change")
        j = 1;
    } else {
        slider.nextElementSibling.classList.add("change")
    }
}, 2000);

// end slideshow


// start management slideshow
const slide2 = document.querySelectorAll(".management-container .management-slide");
console.log(slide2)
let k = 1;
setInterval(() => {
    k++;
    const slider2 = document.querySelector(".management-container .change")
    slider2.classList.remove('change')
    if (k > slide2.length) {
        slide2[0].classList.add("change")
        k = 1;
    } else {
        slider2.nextElementSibling.classList.add("change")
    }
}, 5000);

// end slideshow
    


//  bottom arrow
document.querySelector('.scroll-btn').addEventListener('click',()=>{
    document.querySelector("html").style.scrollBehavior='smooth';
    setTimeout(() => {
      document.querySelector("html").style.scrollBehavior='unset';
    }, timeout);
  
});