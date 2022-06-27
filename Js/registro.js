let formularioDeRegistro= document.getElementById("formularioDeRegistro");
let spiner = document.getElementById("spiner");

formularioDeRegistro.addEventListener("submit",registro)


function registro(e){

e.preventDefault();

let div = document.createElement('div');
let nombreUsuario = e.target[0].value
let correo = e.target[1].value
let pass = e.target[2].value

let textoDeRegistro = document.getElementById("textoDeRegistro")


let user={
    username:nombreUsuario,
    email:correo,
    password:pass,
}

let json = JSON.stringify(user)
localStorage.setItem(nombreUsuario,json)

textoDeRegistro.innerHTML = "Te Registraste Correctamente"

div.innerHTML=`<div class="spinner"></div>`

spiner.appendChild(div);  
setTimeout(function(){
    window.location.assign("http://127.0.0.1:5500/login.html")
},3000)



}


