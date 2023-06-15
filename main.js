
function flip() {
    const loginCard = document.getElementById('loginCard');
    const registerCard = document.getElementById('registerCard');
  
    if (registerCard.classList.contains("opacityON")) {
      registerCard.classList.remove("opacityON");
      registerCard.classList.add("opacityOFF");
      loginCard.classList.remove("opacityOFF");
      loginCard.classList.add("opacityON");
    } else {
      registerCard.classList.remove("opacityOFF");
      registerCard.classList.add("opacityON");
      loginCard.classList.remove("opacityON");
      loginCard.classList.add("opacityOFF");
    }
  }
