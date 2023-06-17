const iniciarBtn = document.getElementById('button_input');
iniciarBtn.addEventListener('click', validarInicioSesion);

function validarInicioSesion() {
  const emailInput = document.getElementById('email_input');
  const passwordInput = document.getElementById('password_input');

  if (emailInput.value === '') {
    alert('Por favor, ingresa tu dirección de correo electrónico.');
    return;
  }

  if (passwordInput.value === '') {
    alert('Por favor, ingresa tu contraseña.');
    return;
  }

}

const registrarseBtn = document.getElementById('button_registro');
registrarseBtn.addEventListener('click', validarRegistro);

function validarRegistro(){
  const inputEmailRegistro = document.getElementById('email_registro');
  const inputPasswordRegistro = document.getElementById('password_registro');
  const inputConfirmarRegistro = document.getElementById('password_confirmarContraseña');

  if(inputEmailRegistro.value === ''){
    alert('Por favor, ingresa una dirección de correo electrónico.');
    return;
  }

  if(inputPasswordRegistro.value === ''){
    alert('Por favor, ingresa una contraseña.');
    return;
  }

  if(inputPasswordRegistro.value  != inputConfirmarRegistro.value ){
    alert('Las contraseñas tiene que coincidir.');
    return;
  }
}


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


const eyeBtn = document.getElementById('eyeIcon');
const passwordInput = document.getElementById('password_input');

eyeBtn.addEventListener("click", function(){

  if(passwordInput.type == "password"){
    passwordInput.type = "text"
    eyeBtn.style.color = "#ba586a"
  }else{
    passwordInput.type = "password"
    eyeBtn.style.color = "#fff"
  }
})

const eyeBtnRegistro = document.getElementById('eyeIconRegistro');
const passwordInputRegistro = document.getElementById('password_registro');

eyeBtnRegistro.addEventListener("click", function(){

  if(passwordInputRegistro.type == "password"){
    passwordInputRegistro.type = "text"
    eyeBtnRegistro.style.color = "#ba586a"
  }else{
    passwordInputRegistro.type = "password"
    eyeBtnRegistro.style.color = "#fff"
  }
})


const eyeBtnConRegistro = document.getElementById('eyeIconConRegistro');
const passwordInputConRegistro = document.getElementById('password_confirmarContraseña');

eyeBtnConRegistro.addEventListener("click", function(){

  if(passwordInputConRegistro.type == "password"){
    passwordInputConRegistro.type = "text"
    eyeBtnConRegistro.style.color = "#ba586a"
  }else{
    passwordInputConRegistro.type = "password"
    eyeBtnConRegistro.style.color = "#fff"
  }
})
