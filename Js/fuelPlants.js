class plantaCombu {
  constructor(obj) {
    this.id = obj.id;
    this.nombre = obj.nombre;
    this.aeroNafta = obj.aeroNafta;
    this.JetA1 = obj.JetA1;
    this.telefono = obj.telefono;
    this.latitud = obj.latitud;
    this.longitud = obj.longitud;
  }
}

const contenedor = document.querySelector("#dinamic");

const btnAgregar = document.getElementById("disAeropuertos2");

let Data = [];

fetch("../dataBase/fuelPlantsDataBase.json")   //consulta a la base de datos local
  .then((response) => {
    return response.json();
  })
  .then((jsondata) => {
    for (let i = 0; i < jsondata.length; i++) {
      // console.log(JSON.stringify(jsondata[i]))

      Data.push(new plantaCombu(jsondata[i]));
    }
  });

// console.log(Data);



window.addEventListener("load", function () {
  fun2(); // simula el pedido async a la base de datos
  setTimeout(fun1, 3000);
});

function fun1() {
  let div = document.createElement("tbody");

  for (let i = 0; i < Data.length; i++) {
    div.innerHTML += `
            
            
              <td scope="row" class="text-start">${Data[i].nombre}</td>
              <td><svg class="bi" width="24" height="24"><use xlink:href="#check"/></svg>${Data[i].aeroNafta}$</td>
              <td><svg class="bi" width="24" height="24"><use xlink:href="#check"/></svg>${Data[i].JetA1}$</td>
              <td><svg class="bi" width="24" height="24"><use xlink:href="#check"/></svg>${Data[i].telefono}</td>
              <td><a href="http://www.google.com/maps/place/${Data[i].latitud},${Data[i].longitud}" target="_blank">⛽</a></td>
      `;
  }
  contenedor.appendChild(div);
}

function fun2() {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });
  Toast.fire({
    icon: "info",
    title: "Su información se esta cargardo",
  });
}
