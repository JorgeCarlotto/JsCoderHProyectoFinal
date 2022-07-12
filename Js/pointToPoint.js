const postUnoLartText = document.querySelector("#postUnoLartText");
const postUnoLongText = document.querySelector("#postUnoLongText");
const postDosLartText = document.querySelector("#postDosLartText");
const postDosLongText = document.querySelector("#postDosLongText");
const verMapaPostUno = document.querySelector("#verMapaPostUno");
const verMapaPostDos = document.querySelector("#verMapaPostDos");
const resultFinal = document.querySelector("#resultFinal");
let formDistPoints = document.getElementById("formDistPuntos");



//funcion toma los datos numericos del formulario crea la posicion grados decimales.
function decimal(degrees, minutes, seconds, direction) {
  if (direction) {
    sign =
      direction.toLowerCase() == "w" || direction.toLowerCase() == "s" ? -1 : 1;
      direction =
      direction.toLowerCase() == "w" ||
      direction.toLowerCase() == "s" ||
      direction.toLowerCase() == "n" ||
      direction.toLowerCase() == "e"
        ? direction.toLowerCase()
        : "";
  } else {
    sign = parseInt(degrees) < 0 ? -1 : 1;
    direction = "";
  }
  dec =
    Math.round(
      (Math.abs(parseInt(degrees)) +
        (parseInt(minutes) * 60 + parseInt(seconds)) / 3600) *
        1000000
    ) / 1000000;
  if (isNaN(direction) || direction == "") dec = dec * sign;

  return dec;
}

//Con los datos pasados a grados decimales se aplica la siguiente f

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

//Evento Submit y validación de datos.
formDistPoints.addEventListener("submit", validatePoint);

function validatePoint(e) {
  e.preventDefault();

  let smallLatatitudUno = document.createElement("small");
  let smallLongongitudUno = document.createElement("small");
  let smallLatatitudDos = document.createElement("small");
  let smallLongongitudDos = document.createElement("small");

  let aPositionOne = document.createElement("a");
  let aPositionTwo = document.createElement("a");

  let titleFour = document.createElement("h4");

  //Datos Latitud punto de partida
  let latatitudGraUno = e.target[0].value;
  let latatitudMinuUno = e.target[1].value;
  let latatitudSegUno = e.target[2].value;

  //Datos Longitud punto de partida

  let longitudGraUno = e.target[3].value;
  let longitudMinuUno = e.target[4].value;
  let longitudSegUno = e.target[5].value;

  //Datos Latitud punto de LLegada
  let latatitudGraDos = e.target[6].value;
  let latatitudMinuDos = e.target[7].value;
  let latatitudSegDos = e.target[8].value;

  //Datos Longitud punto de LLegada

  let longitudGraDos = e.target[9].value;
  let longitudMinuDos = e.target[10].value;
  let longitudSegDos = e.target[11].value;

  let latitudOne = decimal(latatitudGraUno, latatitudMinuUno, latatitudSegUno, "s");
  let longitudOne = decimal(longitudGraUno, longitudMinuUno, longitudSegUno, "w");
  let latitudTwo = decimal(latatitudGraDos, latatitudMinuDos, latatitudSegDos, "s");
  let longitudTwo = decimal(longitudGraDos, longitudMinuDos, longitudSegDos, "w");

  titleFour.innerHTML = `${Distance(latitudOne, longitudOne, latitudTwo, longitudTwo)} Nm`;

  smallLatatitudUno.innerHTML = `Latitud:${latatitudGraUno}° ${latatitudMinuUno}" ${latatitudSegUno}'`;
  smallLongongitudUno.innerHTML = `Longitud:${longitudGraUno}° ${longitudMinuUno}" ${longitudSegUno}'`;
  smallLatatitudDos.innerHTML = `Latitud:${latatitudGraDos}° ${latatitudMinuDos}" ${latatitudSegDos}'`;
  smallLongongitudDos.innerHTML = `Longitud:${longitudGraDos}° ${longitudMinuDos}" ${longitudSegDos}'`;

  aPositionOne.innerHTML =
    '<a href="http://www.google.com/maps/place/' +
    latitudOne +
    "," +
    longitudOne +
    '" target="_blank">Ver tu punto en Google Maps</a>';
  aPositionTwo.innerHTML =
    '<a href="http://www.google.com/maps/place/' +
    latitudTwo +
    "," +
    longitudTwo +
    '" target="_blank">Ver tu punto en Google Maps</a>';

  resultFinal.appendChild(titleFour);

  postUnoLartText.appendChild(smallLatatitudUno);
  postUnoLongText.appendChild(smallLongongitudUno);
  postDosLartText.appendChild(smallLatatitudDos);
  postDosLongText.appendChild(smallLongongitudDos);

  verMapaPostUno.appendChild(aPositionOne);
  verMapaPostDos.appendChild(aPositionTwo);
}
