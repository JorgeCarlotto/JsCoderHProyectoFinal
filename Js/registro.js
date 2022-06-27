let formularioDeRegistro= document.getElementById("formularioDeRegistro");


formularioDeRegistro.addEventListener("submit",registro)


function registro(e){

e.preventDefault();

let nombreUsuario = e.target[0].value
let correo = e.target[1].value
let pass = e.target[2].value


let user={
    username:nombreUsuario,
    email:correo,
    password:pass,
}

let json = JSON.stringify(user)
localStorage.setItem(nombreUsuario,json)

console.log("Usuario agregado")


}