const contenedor = document.querySelector("#resultadoDistAirport");
let formDistAirpot = document.getElementById("DisAirportForm");

// Función para determinar la distancia

function Distance(latitudOne, longitudOne, latitudTwo, longitudTwo) {
  rad = function (x) {
    return (x * Math.PI) / 180;
  };

  let radio = 3443.918; //Radio de la tierra en km 6378.137  //Radio de la tierra en nm 3443.918
  let distanceLatitud = rad(latitudTwo - latitudOne);
  let distanceLongitud = rad(longitudTwo - longitudOne);
  let calculateOne =
    Math.sin(distanceLatitud / 2) * Math.sin(distanceLatitud / 2) +
    Math.cos(rad(latitudOne)) *
      Math.cos(rad(latitudTwo)) *
      Math.sin(distanceLongitud / 2) *
      Math.sin(distanceLongitud / 2);
  let calculate = 2 * Math.atan2(Math.sqrt(calculateOne), Math.sqrt(1 - calculateOne));
  let finalDistance = radio * calculate;
  return finalDistance.toFixed(1); //Retorna la distancia entre los dos puntos.
}

//llamado API

function API() {
  const url = `https://soluciones.aeroterra.com/server/rest/services/OD_Transporte/ANAC_Aerodromos/FeatureServer/0/query?where=1%3D1&outFields=oaci,longitud,latitud,provincia,iata,denominacion&outSR=4326&f=json`;

  const dataAirports = [];

  fetch(url)
    .then((data) => {
      return data.json();
    })
    .then((dataJSON) => {
      for (let i = 0; i < dataJSON.features.length; i++) {
        
        if (dataJSON.features[i].attributes.oaci) {
          dataAirports.push(dataJSON.features[i].attributes);
        }
      }

      airpotsDataAtributes(dataAirports);
    })
    .then(() => {

      //validación del formulario capta los datos y arma el div con el resultado
      formDistAirpot.addEventListener("submit", validarFormDisAirpot);  
      function validarFormDisAirpot(e) {
        e.preventDefault();
        let div = document.createElement("div");

        let aeropuertoSalida = e.target[0].value;
        let aeropuertoLlegada = e.target[1].value;

        function takeoffAirport() {
          for (let i = 0; i < dataAirports.length; i++) {
            if (aeropuertoSalida === dataAirports[i].denominacion) {
              let airpotTakeOffPosition = [];

              let lat = dataAirports[i].latitud;
              let long = dataAirports[i].longitud;

              airpotTakeOffPosition.push(lat, long);

              return airpotTakeOffPosition;
            }
          }
        }

        function landingAirport() {
          for (let i = 0; i < dataAirports.length; i++) {
            if (aeropuertoLlegada === dataAirports[i].denominacion) {
              let airpotLandingPosition = [];

              let lat = dataAirports[i].latitud;
              let long = dataAirports[i].longitud;

              airpotLandingPosition.push(lat, long);

              return airpotLandingPosition;
            }
          }
        }

        div.innerHTML = `
   
      <div class="b-example-divider"></div>
      <div class="modal modal-sheet position-static d-block  py-5" tabindex="-1" role="dialog" id="modalSheet">
          <div class="modal-dialog" role="document">
            <div class="modal-content rounded-4 shadow">
              <div class="modal-header border-bottom-0">
                <h5 class="modal-title">La Distancia entre los aeropuertos es:</h5>         
              </div>
              <div class="modal-body py-0">
                <h3 class="modal-title"> ${Distance(
                  takeoffAirport()[0],
                  takeoffAirport()[1],
                  landingAirport()[0],
                  landingAirport()[1]
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
    })

    .catch((err) => {
      console.log(err);
    });
}

API();


const eliminar = (e) => {
  const divPadre = contenedor;
  contenedor.remove(divPadre);
};

//Extraer los nombres de los aeropuertos para armar el option del usuario.
function airpotsDataAtributes(dataAirports) {
  let airportsName = [];

  for (let i = 0; i < dataAirports.length; i++) {
    airportsName.push(dataAirports[i].denominacion);
  }

  selectAirportList(airportsName.sort());
}

let selectOne = document.querySelector("#testSelectOne");
let selectTwo = document.querySelector("#testSelectTwo");


//Crea Options
function selectAirportList(listAirportName) {  
  for (value in listAirportName) {
    var option = document.createElement("option");
    option.text = listAirportName[value];
    selectOne.add(option);
  }

  for (value in listAirportName) {
    var option = document.createElement("option");
    option.text = listAirportName[value];

    selectTwo.add(option);
  }
}
