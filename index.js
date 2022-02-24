// grabbing all the images

const slides = document.getElementsByClassName("carousel-item");

let slidePos = 0;

let totalSlides = slides.length;

// my solution
/** 
let moveToPrevSlide = () => {
  if (slidePos > 0) {
    slides[slidePos].className = "carousel-item";
    slidePos -= 1;
    slides[slidePos].className = "carousel-item carousel-item-visible";
  } else {
    slides[slidePos].className = "carousel-item";
    slidePos = totalSlides - 1;
    slides[slidePos].className = "carousel-item carousel-item-visible";
  }
};

let moveToNextSlide = () => {
  if (slidePos < totalSlides - 1) {
    slides[slidePos].className = "carousel-item";
    slidePos += 1;
    slides[slidePos].className = "carousel-item carousel-item-visible";
  } else {
    slides[slidePos].className = "carousel-item";
    slidePos = 0;
    slides[slidePos].className = "carousel-item carousel-item-visible";
  }
}; 

*/
  // Another aproach

  let hideAllSlides = () => {
      for (let slide of slides) {
          
           slide.classList.remove("carousel-item-visible")
           slide.classList.add("carousel-item-hidden")
           
      }
  }

  let moveToNextSlide = () => {
      hideAllSlides()
      if (slidePos === totalSlides-1) {
          slidePos = 0
      } else {
          slidePos++
      }
      slides[slidePos].classList.add("carousel-item-visible")
  }


  let moveToPrevSlide = () => {
      hideAllSlides()
      if (slidePos === 0) {
          slidePos = totalSlides-1 
      } else {
          slidePos--
      }
      slides[slidePos].classList.add("carousel-item-visible")  
    }

  document
  .getElementById("carousel-btn-prev")
  .addEventListener("click", moveToPrevSlide);

document
  .getElementById("carousel-btn-next")
  .addEventListener("click", moveToNextSlide);
