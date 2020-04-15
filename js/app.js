document.addEventListener("DOMContentLoaded", function(){
const nestedMenu = document.querySelector(".nested-menu");
const menuTriggerEl = document.querySelector(".menu-trigger-el");
    menuTriggerEl.addEventListener("mouseover", function(){
        nestedMenu.style.display = "block";
    });
    
    nestedMenu.addEventListener("mouseout", function() {
        this.style.display = "none";
        
    });  
    
    const readMoreLessButton = document.querySelector(".read-more-less-button");
    const additionalText = document.querySelector(".additional-paragraph");
    
    
    readMoreLessButton.addEventListener("click", function() {
      if (additionalText.style.display === "none" || additionalText.style.display === "") {
          additionalText.style.display = "block";
          readMoreLessButton.textContent = "Read less";
      } else { 
          additionalText.style.display = "none";
          readMoreLessButton.textContent = "Read more";
           }
         });
    
});





