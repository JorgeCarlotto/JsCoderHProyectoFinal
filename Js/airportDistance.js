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

const eliminar = (e) => {
  const divPadre = contenedor;
  contenedor.remove(divPadre);
};

function API() {
  //llamado API

  const url = `https://soluciones.aeroterra.com/server/rest/services/OD_Transporte/ANAC_Aerodromos/FeatureServer/0/query?where=1%3D1&outFields=oaci,longitud,latitud,provincia,iata,denominacion&outSR=4326&f=json`;

  const dataAirports = [];

  fetch(url)
    .then((data) => {
      return data.json();
    })
    .then((dataJSON) => {
      for (let i = 0; i < dataJSON.features.length; i++) {
        //console.log(dataJSON.features[i].attributes.oaci)

        if (dataJSON.features[i].attributes.oaci) {
          dataAirports.push(dataJSON.features[i].attributes);
        }
      }
      // console.log(dataJSON.features[25].attributes.denominacion); //consulta de datos
      // console.log(dataJSON.features[25].attributes); //consulta de datos
      //console.log(dataAirports)
      airpotsDataAtributes(dataAirports);
    })
    .then(() => {
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
                <h3 class="modal-title"> ${Dist(
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

function airpotsDataAtributes(dataAirports) {
  let airportsName = [];

  for (let i = 0; i < dataAirports.length; i++) {
    airportsName.push(dataAirports[i].denominacion);
  }

  selectAirportList(airportsName.sort());
}

let selectOne = document.querySelector("#testSelectOne");
let selectTwo = document.querySelector("#testSelectTwo");

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
