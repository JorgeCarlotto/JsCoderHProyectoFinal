let formularioDeLogin= document.getElementById("formularioDeLogin");


formularioDeLogin.addEventListener("submit",login)


function login(e){

e.preventDefault();

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
}else{
    resultadoFail.innerHTML ="La contraseña no es correcta"
}


    
}

