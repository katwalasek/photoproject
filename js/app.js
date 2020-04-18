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
    console.log(formInfo);
    
    newsletterButton.addEventListener("click", function(event) {
        event.preventDefault();
        formInfo.style.display = "block";
        
        if (input.value !=="") {
            formInfo.textContent = "You have been subscribed";
            input.value = "";
        } else {
            formInfo.textContent = "Please, apply your email address";
               }
        
    })
    
    
    
    
});





