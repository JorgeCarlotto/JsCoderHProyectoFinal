
alert("Bienvenido Piloto")

//CAPTURA DE DATOS POR PARTE DEL USUARIO

//Primero capturo los datos con un pront, la idea es diseñar un formulario para cargar datos.
alert("Primero vamos a seleccionar la posición de donde partimos")

//Datos Latitud punto de partida
let latGraUno = prompt("Latitud : Ingresa los grados")
let latMinuUno = prompt("Latitud : Ingresa los minutos")
let latSegUno = prompt("Latitud : Ingresa los segundos")

//Datos Longitud punto de partida

let longGraUno = prompt("Longitud : Ingresa los grados")
let longMinuUno = prompt("Longitud : Ingresa los minutos")
let longSegUno = prompt("Longitud : Ingresa los segundos")

alert("Ahora vamos a seleccionar la posición a donde queremos ir")

//Datos Latitud punto de LLegada
let latGraDos = prompt("Latitud : Ingresa los grados")
let latMinuDos = prompt("Latitud : Ingresa los minutos")
let latSegDos = prompt("Latitud : Ingresa los segundos")

//Datos Longitud punto de LLegada

let longGraDos = prompt("Longitud : Ingresa los grados")
let longMinuDos = prompt("Longitud : Ingresa los minutos")
let longSegDos = prompt("Longitud : Ingresa los segundos")


//CALCULOS DE POSICIONAMIENTO Y DISTANCIA.

//Primero se debe cambiar del formato grados minutos y segundos a Grados decimales. 

function LatLogGradosDecimales (grados,minutos,segundos){ 
    let result = (parseInt(grados)+(parseInt(minutos)/60)+(parseInt(segundos)/60))*-1;
    return result;
}


let lat1 = LatLogGradosDecimales (latGraUno,latMinuUno,latSegUno)
let lon1 = LatLogGradosDecimales (longGraUno,longMinuUno,longSegUno)
let lat2 = LatLogGradosDecimales (latGraDos,latMinuDos,latSegDos)
let lon2 = LatLogGradosDecimales (longGraDos,longMinuDos,longSegDos)



//Con los datos pasados a grados decimales se aplica la siguiente formula 

 
function Dist(lat1, lon1, lat2, lon2) {
     rad = function (x) {
         return x * Math.PI / 180;
     }
 
     let R = 3443.918;//Radio de la tierra en km 6378.137  //Radio de la tierra en nm 3443.918
     let dLat = rad(lat2 - lat1);
     let dLong = rad(lon2 - lon1);
     let a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(rad(lat1)) * Math.cos(rad(lat2)) * Math.sin(dLong / 2) * Math.sin(dLong / 2);
     let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
     let d = R * c;
     return d.toFixed(1);//Retorna la distancia entre los dos puntos.
}
 



alert("La distancia a tu destino es de: "+ (Dist(lat1, lon1, lat2, lon2))+"millas nauticas")