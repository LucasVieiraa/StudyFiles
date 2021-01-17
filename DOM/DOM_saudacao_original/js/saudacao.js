(function(){
    const userName = null;
    const element = document.querySelector(".top-bar p");

     if(userName){
     element.innerHTML += '<b>' + userName + '</b>';    
     }else{
    //  element.parentElement.style.display = "none"
    const elementToRemove = element.parentElement;
    elementToRemove.parentElement.removeChild(elementToRemove)
     }
})()