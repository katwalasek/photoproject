document.addEventListener("DOMContentLoaded", function(){
const nestedMenu = document.querySelector(".nested-menu");
const menuTriggerEl = document.querySelector(".menu-trigger-el");
    menuTriggerEl.addEventListener("mouseover", function(){
        nestedMenu.style.display = "block";
    });
    
    nestedMenu.addEventListener("mouseout", function() {
        this.style.display = "none";
        
    });  
    
    const readMoreLessButtons = document.querySelectorAll(".read-more-less-button");
     
    function showHideText() {
        const siblingText = this.previousElementSibling;
        
      if (siblingText.style.display === "none" || siblingText.style.display === "") {
          siblingText.style.display = "block";
          this.textContent = "Read less";
      } else { 
          siblingText.style.display = "none";
          this.textContent = "Read more";
           }  
    }
    
   for (let i = 0; i < readMoreLessButtons.length; i++) {
       readMoreLessButtons[i].addEventListener("click", showHideText);
   }
   
    
    const input = document.querySelector(".newsletter-form input");
    const newsletterButton = document.querySelector(".newsletter-form button");
    const formInfo = document.querySelector(".form-info");
    
    
    newsletterButton.addEventListener("click", function(event) {
        event.preventDefault();
        formInfo.style.display = "block";
        
        if (input.value !=="") {
            formInfo.textContent = "You have been subscribed";
            input.value = "";
        } else {
            formInfo.textContent = "Please, apply your email address";
               }
        
    });
    
    const slider = document.querySelector(".slider");
    const sliderStage = document.querySelector(".slider-stage");
    const slides = document.querySelectorAll(".slider li");
    const prev = document.querySelector(".previous-arrow");
    const next = document.querySelector(".next-arrow");
    
    const slideWith = slides[0].clientWidth;
    let currentIndex = 0;
    let slidesNumber = slides.length -1;
    
    function goToSlide(index) { 
        if (index < 0) {
            index = slidesNumber;
        } else if  (index > slidesNumber) {
            index = 0;
        }
        
        
        slider.style.left = index * (-slideWith) + "px";
        currentIndex = index;
    }
    
    function slideToNext() {
        goToSlide(currentIndex + 1);
    }
    
    
    function slideToPrev() {
        goToSlide(currentIndex - 1);
    }
    
    prev.addEventListener("click", slideToPrev);
    next.addEventListener("click", slideToNext);
    
    
    
});





