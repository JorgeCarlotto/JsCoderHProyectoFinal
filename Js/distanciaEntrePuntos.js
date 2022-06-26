//Funciones bases de la app 

//CALCULOS DE POSICIONAMIENTO Y DISTANCIA.

//Primero se debe cambiar del formato grados minutos y segundos a Grados decimales.

function LatLogGradosDecimales(grados, minutos, segundos) {
    let result =
      (parseInt(grados) + parseInt(minutos) / 60 + parseInt(segundos) / 60) * -1;
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



const postUnoLartText = document.querySelector('#postUnoLartText');
const postUnoLongText = document.querySelector('#postUnoLongText');
const postDosLartText = document.querySelector('#postDosLartText');
const postDosLongText = document.querySelector('#postDosLongText');

const resultFinal = document.querySelector('#resultFinal');


let formDistPuntos = document.getElementById("formDistPuntos");

formDistPuntos.addEventListener("submit",validarFormDistPuntos)


function validarFormDistPuntos(e){
    e.preventDefault();
    let small = document.createElement('small');
    let tituloCuatro =document.createElement('h4')

    //Datos Latitud punto de partida
    let latGraUno = e.target[0].value;
    let latMinuUno = e.target[1].value;
    let latSegUno = e.target[2].value;
  
    //Datos Longitud punto de partida
    
    let longGraUno = e.target[3].value;
    let longMinuUno = e.target[4].value;
    let longSegUno = e.target[5].value;
  
 
    //Datos Latitud punto de LLegada
    let latGraDos = e.target[6].value;
    let latMinuDos =e.target[7].value;
    let latSegDos = e.target[8].value;
  
    //Datos Longitud punto de LLegada

    let longGraDos = e.target[9].value;
    let longMinuDos =e.target[10].value;
    let longSegDos = e.target[11].value;
  
    let lat1 = LatLogGradosDecimales(latGraUno, latMinuUno, latSegUno);
    let lon1 = LatLogGradosDecimales(longGraUno, longMinuUno, longSegUno);
    let lat2 = LatLogGradosDecimales(latGraDos, latMinuDos, latSegDos);
    let lon2 = LatLogGradosDecimales(longGraDos, longMinuDos, longSegDos);
  


    tituloCuatro.innerHTML =`${Dist(lat1, lon1, lat2, lon2)} Nm`
 
    resultFinal.appendChild(tituloCuatro);  


}






    