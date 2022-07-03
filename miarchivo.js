//Funciones bases de la app 

//CALCULOS DE POSICIONAMIENTO Y DISTANCIA.

//Primero se debe cambiar del formato grados minutos y segundos a Grados decimales.

// function LatLogGradosDecimales(grados, minutos, segundos) {
//     let result =
//       (parseInt(grados) + parseInt(minutos) / 60 + parseInt(segundos) / 60) * -1;
//     return result;
//   }
  
//   //Con los datos pasados a grados decimales se aplica la siguiente f
  
//   function Dist(lat1, lon1, lat2, lon2) {
//     rad = function (x) {
//       return (x * Math.PI) / 180;
//     };
  
//     let R = 3443.918; //Radio de la tierra en km 6378.137  //Radio de la tierra en nm 3443.918
//     let dLat = rad(lat2 - lat1);
//     let dLong = rad(lon2 - lon1);
//     let a =
//       Math.sin(dLat / 2) * Math.sin(dLat / 2) +
//       Math.cos(rad(lat1)) *
//         Math.cos(rad(lat2)) *
//         Math.sin(dLong / 2) *
//         Math.sin(dLong / 2);
//     let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//     let d = R * c;
//     return d.toFixed(1); //Retorna la distancia entre los dos puntos.
//   }
  




  // document.getElementById("calculosPuntos").onclick = function(){

  //   alert("Ahora vamos a seleccionar la posición de donde salimos");
  //   alert("Ejemplo : 42° 00' 00''");
  //   //Datos Latitud punto de partida
  //   let latGraUno = prompt("Latitud : Ingresa los grados");
  //   let latMinuUno = prompt("Latitud : Ingresa los minutos");
  //   let latSegUno = prompt("Latitud : Ingresa los segundos");
  
  //   //Datos Longitud punto de partida
  //   alert("Ejemplo : 58° 00' 00''");
  //   let longGraUno = prompt("Longitud : Ingresa los grados");
  //   let longMinuUno = prompt("Longitud : Ingresa los minutos");
  //   let longSegUno = prompt("Longitud : Ingresa los segundos");
  
  //   alert("Ahora vamos a seleccionar la posición a donde queremos ir");
  //   alert("Ejemplo : 41° 00' 00''");
  //   //Datos Latitud punto de LLegada
  //   let latGraDos = prompt("Latitud : Ingresa los grados");
  //   let latMinuDos = prompt("Latitud : Ingresa los minutos");
  //   let latSegDos = prompt("Latitud : Ingresa los segundos");
  
  //   //Datos Longitud punto de LLegada
  //   alert("Ejemplo : 58° 00' 00''");
  //   let longGraDos = prompt("Longitud : Ingresa los grados");
  //   let longMinuDos = prompt("Longitud : Ingresa los minutos");
  //   let longSegDos = prompt("Longitud : Ingresa los segundos");
  
  //   let lat1 = LatLogGradosDecimales(latGraUno, latMinuUno, latSegUno);
  //   let lon1 = LatLogGradosDecimales(longGraUno, longMinuUno, longSegUno);
  //   let lat2 = LatLogGradosDecimales(latGraDos, latMinuDos, latSegDos);
  //   let lon2 = LatLogGradosDecimales(longGraDos, longMinuDos, longSegDos);
  
  //   alert(
  //     "La distancia a tu destino es de: " +
  //       Dist(lat1, lon1, lat2, lon2) +
  //       "millas nauticas"
  //   );

  // }     





//----------------------------------------------------------------------------------------------
// class plantaCombu {
//   constructor(obj){
//     this.id = obj.id;
//     this.nombre = obj.nombre;
//     this.aeroNafta = obj.aeroNafta;
//     this.JetA1= obj.JetA1;
//   }
// }

// const contenedor = document.querySelector('#dinamic');

// const btnAgregar = document.getElementById('disAeropuertos2');

// let Data =[]

// fetch("./dataBase/plantasCombustible.json")
// .then(response => {
//    return response.json();
// })
// .then(jsondata => {
  
//   for (let i = 0; i < jsondata.length; i++) {
    
   
//     // console.log(JSON.stringify(jsondata[i]))

//     Data.push(new plantaCombu(jsondata[i]))
 
//   }

// });

//  console.log(Data)



//   document.getElementById("calculosCumbustible").onclick = function(){

    

//     let div = document.createElement('div');
//     alert(
//         "En este momento tenemos disponibles en nuestra base de datos estos tres Aeropuertos"
//       );
   
      
//       for (let i = 0; i <Data.length; i++) {
//         div.innerHTML +=
//             `
// <div class="container marketing">
//     <div class="row">
//       <div class="col-lg-4">
//         <h2 class="fw-normal">${Data[i].nombre}</h2>
//         <h3 class="fw-normal">Precio de Aero Nafta:</h3>
//         <p>${Data[i].aeroNafta} </p>
//         <h3 class="fw-normal">Precio de JetA1:</h3>
//         <p>${Data[i].JetA1} </p>
//       </div>
//     </div>
//     </div>
//     `
        

//       }
//       contenedor.appendChild(div);
  
//   }







//   const contenedor = document.querySelector('#dinamic');

//   const btnAgregar = document.getElementById('disAeropuertos2');

//   btnAgregar.addEventListener('click', e => {
//     let div = document.createElement('div');
//     div.innerHTML = `
//     <div class="b-example-divider"></div>

//     <div
//       class="modal modal-signin position-static d-block bg-secondary py-5"
//       tabindex="-1"
//       role="dialog"
//       id="modalSignin"
//     >
//       <div class="modal-dialog" role="document">
//         <div class="modal-content rounded-4 shadow">
//           <div class="modal-header p-5 pb-4 border-bottom-0">
//             <!-- <h2 class="fw-bold mb-0">Distancia entre Aeropuertos</h2> -->

            
//             <button
//             onclick="eliminar(this)" 
//               type="button"
//               class="btn-close"
//               data-bs-dismiss="modal"
//               aria-label="Close"
//             ></button>
//           </div>

//           <div class="modal-body p-5 pt-0">
//             <form id="formPosEntreAeropuertos">
//               <h3 class="fw-bold mb-0">Aeropuerto Salida</h3>
//               <div class="form-floating mb-3">
//                 <input
//                   type="text"
//                   class="form-control rounded-3"
//                   id="floatingInput"
//                   placeholder="(1)Mar del Plata,(2)Aeroparque,(3)Ezeiza"
//                 />
//                 <label for="floatingInput"
//                   >(1)Mar del Plata,(2)Aeroparque,(3)Ezeiza</label
//                 >
//               </div>
//               <h3 class="fw-bold mb-0">Aeropuerto Llegada</h3>
//               <div class="form-floating mb-3">
//                 <input
//                   type="text"
//                   class="form-control rounded-3"
//                   id="floatingInput"
//                   placeholder="(1)Mar del Plata,(2)Aeroparque,(3)Ezeiza"
//                 />
//                 <label for="floatingInput"
//                   >(1)Mar del Plata,(2)Aeroparque,(3)Ezeiza</label
//                 >
//               </div>
//               <button
//                 class="w-100 mb-2 btn btn-lg rounded-3 btn-primary"
//                 type="submit"
//               >
//                 Calcular
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>`;
//     contenedor.appendChild(div);
// })

// const eliminar = (e) => {
//   const divPadre = contenedor;
//   contenedor.remove(divPadre);
  
// };








// FUNICION CREAR AVION

//   alert(
//     "Con Esta Función vamos a crear Nuestro Avion"
//   );
   

//   let ModeloDeAvion= prompt("Ingresa el Modelo de tu Avión");
//   let velocidadCrucero= prompt("Ingresa velocidad de crucero");
//   let cantidadMaximaCombustible= prompt("Ingresa la Cantidad Maxima de Carga de combustible");


//   function Avion (modelo,vcrucero,combuMax){
//     this.modelo = modelo;
//     this.vcrucero =vcrucero;
//     this.combuMax =combuMax;
//   };

//   let avion = new Avion(ModeloDeAvion,velocidadCrucero,cantidadMaximaCombustible)

//   alert("Tu avion : " + avion.modelo + " Fue cargado de forma Exitosa")
  

//   alert(cargarAviones(avion))

//   function cargarAviones(avionCreado,){

//     let avionesEnDataBase =[
//       {modelo:"CESNA 150",
//       vcrucero:75,
//       combuMax:100
//     },
//     {modelo:"PIPER WARRIOR 3",
//     vcrucero:105,
//     combuMax:150
//   },
//     ];

//     let listaAviones = avionesEnDataBase.push(avionCreado);

   
//     let recorridoAviones = avionesEnDataBase.map(function(e){
//       return e.modelo
//     })

//     return recorridoAviones
//   }
