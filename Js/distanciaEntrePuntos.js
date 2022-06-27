//Funciones bases de la app 

//CALCULOS DE POSICIONAMIENTO Y DISTANCIA.

//Primero se debe cambiar del formato grados minutos y segundos a Grados decimales , Con la direccion determinamos el cuadrante cartografico.

function decimal(grados, minutos, segundos, direccion)
{
if(direccion){
signo     = (direccion.toLowerCase() == 'w' ||
    direccion.toLowerCase() == 's') ?
    -1 : 1;
    direccion = (direccion.toLowerCase() == 'w' ||
        direccion.toLowerCase() == 's' ||
        direccion.toLowerCase() == 'n' ||
        direccion.toLowerCase() == 'e') ?
        direccion.toLowerCase() : '';
    }
    else{
    signo     = (parseInt(grados) < 0) ? -1 : 1;
    direccion = '';
    }
    dec = Math.round((Math.abs(parseInt(grados)) + ((parseInt(minutos) * 60) + parseInt(segundos)) / 3600) * 1000000) / 1000000;
    if(isNaN(direccion) || direccion == '')
        dec = dec * signo;

    return dec 
}
  
  //Con los datos pasados a grados decimales se aplica la siguiente f
  
  function Dist(lat1, lon1, lat2, lon2) {
    rad = function (x) {
      return (x * Math.PI) / 180;
    };
  
    let R = 3443.918; //Radio de la tierra en km 6380.137  //Radio de la tierra en nm 3443.918
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

const verMapaPostUno = document.querySelector('#verMapaPostUno');
const verMapaPostDos = document.querySelector('#verMapaPostDos');

const resultFinal = document.querySelector('#resultFinal');


let formDistPuntos = document.getElementById("formDistPuntos");

formDistPuntos.addEventListener("submit",validarFormDistPuntos)


function validarFormDistPuntos(e){

    e.preventDefault();

    let smallLatUno = document.createElement('small');
    let smallLongUno = document.createElement('small');
    let smallLatDos = document.createElement('small');
    let smallLongDos = document.createElement('small');

    let aPostUno = document.createElement('a');
    let aPostDos = document.createElement('a');

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
  
    let lat1 = decimal(latGraUno, latMinuUno, latSegUno,"s");
    let lon1 = decimal(longGraUno, longMinuUno, longSegUno,"w");
    let lat2 = decimal(latGraDos, latMinuDos, latSegDos,"s");
    let lon2 = decimal(longGraDos, longMinuDos, longSegDos,"w");
  




    tituloCuatro.innerHTML =`${Dist(lat1, lon1, lat2, lon2)} Nm`

    smallLatUno.innerHTML = `Latitud:${latGraUno}° ${latMinuUno}" ${latSegUno}'`
    smallLongUno.innerHTML= `Longitud:${longGraUno}° ${longMinuUno}" ${longSegUno}'`
    smallLatDos.innerHTML=  `Latitud:${latGraDos}° ${latMinuDos}" ${latSegDos}'`
    smallLongDos.innerHTML= `Longitud:${longGraDos}° ${longMinuDos}" ${longSegDos}'`

    aPostUno.innerHTML='<a href="http://www.google.com/maps/place/'+lat1 +','+lon1+'" target="_blank">Ver tu punto en Google Maps</a>'
    aPostDos.innerHTML='<a href="http://www.google.com/maps/place/'+lat2+','+lon2+'" target="_blank">Google Maps</a>'


 
    resultFinal.appendChild(tituloCuatro);

    postUnoLartText.appendChild(smallLatUno);
    postUnoLongText.appendChild(smallLongUno)
    postDosLartText.appendChild(smallLatDos)
    postDosLongText.appendChild(smallLongDos)

    verMapaPostUno.appendChild(aPostUno)
    verMapaPostDos.appendChild(aPostDos)



}




