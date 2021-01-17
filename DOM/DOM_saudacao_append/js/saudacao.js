(function(){
    const userName = 'Lucas';
  if(userName){
    const topBarElement = document.createElement("div");
    topBarElement.className = "top-bar";
    topBarElement.innerHTML = `<p> Bem-vindo(a), <b> ${userName} </b></p>`
     
     const elementFather = document.querySelector(".hero");
     elementFather.insertBefore(topBarElement, elementFather.firstElementChild)
     console.log(elementFather.firstElementChild);
  }
})()