let form = document.getElementById("form");
let spiner = document.getElementById("spiner");

form.addEventListener("submit", register);

function register(e) {
  e.preventDefault();

  let div = document.createElement("div");
  let userName = e.target[0].value;
  let email = e.target[1].value;
  let pass = e.target[2].value;

  let user = {
    username: userName,
    email: email,
    password: pass,
  };

  let json = JSON.stringify(user);
  localStorage.setItem(userName, json);

  Swal.fire(
    "Tu cuenta fue creada con exito",
    "Te rediccionaremos al login...",
    "success"
  );

  spiner.appendChild(div);
  setTimeout(function () {
    window.location.assign("http://127.0.0.1:5500/index.html");
  }, 3000);
}
