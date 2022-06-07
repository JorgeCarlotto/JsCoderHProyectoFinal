
alert("Bienvenido Piloto a nuestra App Aeronautica")

//CAPTURA DE DATOS POR PARTE DEL USUARIO

//Primero capturo los datos con un pront, la idea es en el fututo diseñar un formulario para cargar y validar datos.
alert("Primero vamos a seleccionar que queremos hacer")
alert("Selecciona la opcion con el numero correspondiente. Ej: (3)Precio de Combustible, escribir el numero 3 en la pantalla")
let userChoose = prompt("Que preferis elegir distancia desde  (1)Aeropuertos o (2)Cargar mi Latitud y Longitud, (3)Precio de Combustible")

let inicio = distance(userChoose)

function distance ( number ){

    if(parseInt(number)=== 1){

        alert("Aeropuerto de salida")
        let aeropuertoSalida =  prompt('(1)Mar del Plata,(2)Aeroparque,(3)Ezeiza')
        
        alert("Aeropuerto de llegada")
        let aeropuertoLlegada =  prompt('(1)Mar del Plata,(2)Aeroparque,(3)Ezeiza')
        
        // alert("Por el momento la funcion no se encuentra disponible intente cargar Latitud y Longitud")
        
        let sazm = {
            id:1,
            nombre:"Mar del Plata",
            lat:[37,56,02],
            log:[57,34,22]
            
        }
        
        let sabe = {
            id:2,
            nombre:"Aeroparque",
            lat:[34,33,32],
            log:[58,24,57]
        }
        
        let saez = {
            id:3,
            nombre:"Ezeiza",
            lat:[34,49,19],
            log:[58,32,09]
        }
        
        let dataBaseAirpot =[sazm,sabe,saez]
        
        function takeoffAirport(takeoff){
            for (let i = 0; i < dataBaseAirpot.length; i++) {
                if(parseInt(takeoff) === dataBaseAirpot[i].id ){
                    let positionOne=[]      
                    let lat1 = LatLogGradosDecimales (dataBaseAirpot[i].lat[0],dataBaseAirpot[i].lat[1],dataBaseAirpot[i].lat[2])
                    let lon1 = LatLogGradosDecimales (dataBaseAirpot[i].log[0],dataBaseAirpot[i].log[1],dataBaseAirpot[i].log[2])
                  
                    positionOne.push(lat1,lon1)
                    return positionOne
            }
            
        }
        
        }
        function landingAirport(landing){
            for (let i = 0; i < dataBaseAirpot.length; i++) {
                if(parseInt(landing) === dataBaseAirpot[i].id ){
                    let positionTwo=[]      
                    let lat1 = LatLogGradosDecimales (dataBaseAirpot[i].lat[0],dataBaseAirpot[i].lat[1],dataBaseAirpot[i].lat[2])
                    let lon1 = LatLogGradosDecimales (dataBaseAirpot[i].log[0],dataBaseAirpot[i].log[1],dataBaseAirpot[i].log[2])
                  
                    positionTwo.push(lat1,lon1)
                    return positionTwo
            }
            
        }
        
        }
        
        let toaLat = takeoffAirport(aeropuertoSalida)[0] 
        let toaLong = takeoffAirport(aeropuertoSalida)[1] 
        let lanLat = landingAirport(aeropuertoLlegada)[0]
        let lanlog = landingAirport(aeropuertoLlegada)[1]
        
        alert("La distancia entre sus dos aeropuertos es: " + Dist(toaLat,toaLong,lanLat,lanlog) )

        
    }else if(parseInt(number) === 2){

 alert("Ahora vamos a seleccionar la posición de donde salimos")
 alert("Ejemplo : 42° 00' 00''")
        //Datos Latitud punto de partida
let latGraUno = prompt("Latitud : Ingresa los grados")
let latMinuUno = prompt("Latitud : Ingresa los minutos")
let latSegUno = prompt("Latitud : Ingresa los segundos")

//Datos Longitud punto de partida
alert("Ejemplo : 58° 00' 00''")
let longGraUno = prompt("Longitud : Ingresa los grados")
let longMinuUno = prompt("Longitud : Ingresa los minutos")
let longSegUno = prompt("Longitud : Ingresa los segundos")

alert("Ahora vamos a seleccionar la posición a donde queremos ir")
alert("Ejemplo : 41° 00' 00''")
//Datos Latitud punto de LLegada
let latGraDos = prompt("Latitud : Ingresa los grados")
let latMinuDos = prompt("Latitud : Ingresa los minutos")
let latSegDos = prompt("Latitud : Ingresa los segundos")

//Datos Longitud punto de LLegada
alert("Ejemplo : 58° 00' 00''")
let longGraDos = prompt("Longitud : Ingresa los grados")
let longMinuDos = prompt("Longitud : Ingresa los minutos")
let longSegDos = prompt("Longitud : Ingresa los segundos")

let lat1 = LatLogGradosDecimales (latGraUno,latMinuUno,latSegUno)
let lon1 = LatLogGradosDecimales (longGraUno,longMinuUno,longSegUno)
let lat2 = LatLogGradosDecimales (latGraDos,latMinuDos,latSegDos)
let lon2 = LatLogGradosDecimales (longGraDos,longMinuDos,longSegDos)

alert("La distancia a tu destino es de: "+ (Dist(lat1, lon1, lat2, lon2))+"millas nauticas")
    
    
    }else if(parseInt(number) === 3){

        alert('En este momento tenemos disponibles en nuestra base de datos estos tres Aeropuertos')
        
        let marDelPlata = {
            id:1,
            nombre: "Aeropuerto Mar del Plata",
            aeroNafta :190,
            JetA1:150
        }
        
        let ezeiza = {
            id:2,
            nombre: "Aeropuerto Ezeiza",
            aeroNafta :170,
            JetA1:130
        }
        
        let comodoroRivadavia = {
            id:3,
            nombre: "Aeropuerto Comodoro Rivadavia",
            aeroNafta :120,
            JetA1:100
        }
        
        let aeropuertos = [marDelPlata,ezeiza,comodoroRivadavia]

        for (let i = 0; i < aeropuertos.length; i++) {
            
        alert(aeropuertos[i].nombre +" --- "+ "Precio de Aereo nafta: " + aeropuertos[i].aeroNafta +"$"+"--- "
        +"Precio de JetA1:" + aeropuertos[i].JetA1 +"$"  )
            
        }

    }

else{
    alert('El dato seleccionado no es valido')
}

}


//CALCULOS DE POSICIONAMIENTO Y DISTANCIA.

//Primero se debe cambiar del formato grados minutos y segundos a Grados decimales. 

function LatLogGradosDecimales (grados,minutos,segundos){ 
    let result = (parseInt(grados)+(parseInt(minutos)/60)+(parseInt(segundos)/60))*-1;
    return result;
}


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
 



