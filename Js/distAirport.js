function LatLogGradosDecimales(degrees, minutes, seconds) {
  let result =
    (parseInt(degrees) + parseInt(minutes) / 60 + parseInt(seconds) / 60) * -1;
  return result;
}

//Con los datos pasados a grados decimales se aplica la siguiente f

function Dist(lat1, lon1, lat2, lon2) {
  rad = function (x) {
    return (x * Math.PI) / 180;
  };

  let R = 3443.918; //Radio de la tierra en km 6378.137  //Radio de la tierra en nm 3443.918
  let dLat = rad(lat2 - lat1);
  let dLong = rad(lon2 - lon1);
  let a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(rad(lat1)) *
      Math.cos(rad(lat2)) *
      Math.sin(dLong / 2) *
      Math.sin(dLong / 2);
  let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  let d = R * c;
  return d.toFixed(1); //Retorna la distancia entre los dos puntos.
}

const contenedor = document.querySelector("#resultadoDistAirport");
let formDistAirpot = document.getElementById("DisAirportForm");

formDistAirpot.addEventListener("submit", validarFormDisAirpot);

function validarFormDisAirpot(e) {
  e.preventDefault();
  let div = document.createElement("div");

  let aeropuertoSalida = e.target[0].value;
  let aeropuertoLlegada = e.target[1].value;

  //Objetos simulan base de datos de aeropuertos
  let sazm = {
    id: 1,
    nombre: "Mar del Plata",
    lat: [37, 56, 02],
    log: [57, 34, 22],
  };

  let sabe = {
    id: 2,
    nombre: "Aeroparque",
    lat: [34, 33, 32],
    log: [58, 24, 57],
  };

  let saez = {
    id: 3,
    nombre: "Ezeiza",
    lat: [34, 49, 19],
    log: [58, 32, 09],
  };

  let dataBaseAirpot = [sazm, sabe, saez];

  // recorre la base compara la selección gerenera arry con las posiciones con formato editado
  function takeoffAirport(takeoff) {
    for (let i = 0; i < dataBaseAirpot.length; i++) {
      if (parseInt(takeoff) === dataBaseAirpot[i].id) {
        let positionOne = [];
        let lat1 = LatLogGradosDecimales(
          dataBaseAirpot[i].lat[0],
          dataBaseAirpot[i].lat[1],
          dataBaseAirpot[i].lat[2]
        );
        let lon1 = LatLogGradosDecimales(
          dataBaseAirpot[i].log[0],
          dataBaseAirpot[i].log[1],
          dataBaseAirpot[i].log[2]
        );

        positionOne.push(lat1, lon1);
        return positionOne;
      }
    }
  }

  function landingAirport(landing) {
    for (let i = 0; i < dataBaseAirpot.length; i++) {
      if (parseInt(landing) === dataBaseAirpot[i].id) {
        let positionTwo = [];
        let lat1 = LatLogGradosDecimales(
          dataBaseAirpot[i].lat[0],
          dataBaseAirpot[i].lat[1],
          dataBaseAirpot[i].lat[2]
        );
        let lon1 = LatLogGradosDecimales(
          dataBaseAirpot[i].log[0],
          dataBaseAirpot[i].log[1],
          dataBaseAirpot[i].log[2]
        );

        positionTwo.push(lat1, lon1);
        return positionTwo;
      }
    }
  }

  let toaLat = takeoffAirport(aeropuertoSalida)[0];
  let toaLong = takeoffAirport(aeropuertoSalida)[1];
  let lanLat = landingAirport(aeropuertoLlegada)[0];
  let lanlog = landingAirport(aeropuertoLlegada)[1];

  div.innerHTML = `
   
   <div class="b-example-divider"></div>
   <div class="modal modal-sheet position-static d-block  py-5" tabindex="-1" role="dialog" id="modalSheet">
       <div class="modal-dialog" role="document">
         <div class="modal-content rounded-4 shadow">
           <div class="modal-header border-bottom-0">
             <h5 class="modal-title">La Distancia entre los aeropuertos es:</h5>         
           </div>
           <div class="modal-body py-0">
             <h3 class="modal-title"> ${Dist(
               toaLat,
               toaLong,
               lanLat,
               lanlog
             )} Millas Nauticas</h3>
           </div>
           <div class="modal-footer flex-column border-top-0">
             <button  onclick="eliminar(this)" type="button" class="btn btn-lg btn-danger w-100 mx-0" data-bs-dismiss="modal">Close</button>
           </div>
         </div>
       </div>
     </div>
   </div>;
   
   `;
  contenedor.appendChild(div);
}

const eliminar = (e) => {
  const divPadre = contenedor;
  contenedor.remove(divPadre);
};
