let form = document.getElementById("form");
let spiner = document.getElementById("spiner");

form.addEventListener("submit", login);

function login(e) {
  e.preventDefault();

  let div = document.createElement("div");
  let user = e.target[0].value;
  let passLog = e.target[1].value;
  let result = document.getElementById("inputText");

  let userLocal = localStorage.getItem(user);
  let data = JSON.parse(userLocal);

  if (userLocal == null) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "El Usuario no es correcto",
    });
  } else if (user == data.username && passLog == data.password) {
    result.innerHTML = `Bienvenido ${data.username}`;
    div.innerHTML = `<div class="spinner"></div>`;
    spiner.appendChild(div);
    setTimeout(function () {
      window.location.assign("http://127.0.0.1:5500/views/main.html");
    }, 3000);
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "La Contraseña no es correcta",
    });
  }
}
