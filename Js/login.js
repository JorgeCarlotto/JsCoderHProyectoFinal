let formularioDeLogin= document.getElementById("formularioDeLogin");
let spiner = document.getElementById("spiner");

formularioDeLogin.addEventListener("submit",login)


function login(e){

e.preventDefault();

let div = document.createElement('div');
let usuarioLog = e.target[0].value
let passLog = e.target[1].value
let resultado = document.getElementById("textoDeIngreso")
let resultadoFail = document.getElementById("textoDeIngresoFail")


let userLocal = localStorage.getItem(usuarioLog);
let data = JSON.parse(userLocal)

if(userLocal == null){
    resultadoFail.innerHTML ="El Usuario no es correcto"
}else if(usuarioLog == data.username && passLog == data.password){

    resultado.innerHTML =`Bienvenido ${data.username}`
    div.innerHTML=`<div class="spinner"></div>`
    spiner.appendChild(div); 
    setTimeout(function(){
        window.location.assign("http://127.0.0.1:5500/main.html")
    },3000)
    
}else{
    resultadoFail.innerHTML ="La contraseña no es correcta"
}


    
}

