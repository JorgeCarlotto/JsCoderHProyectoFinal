class plantaCombu {
    constructor(obj){
      this.id = obj.id;
      this.nombre = obj.nombre;
      this.aeroNafta = obj.aeroNafta;
      this.JetA1= obj.JetA1;
    }
  }
  
  const contenedor = document.querySelector('#dinamic');
  
  const btnAgregar = document.getElementById('disAeropuertos2');
  
  let Data =[]
  
  fetch("./dataBase/plantasCombustible.json")
  .then(response => {
     return response.json();
  })
  .then(jsondata => {
    
    for (let i = 0; i < jsondata.length; i++) {
      
     
      // console.log(JSON.stringify(jsondata[i]))
  
      Data.push(new plantaCombu(jsondata[i]))
   
    }
  
  });
  
   console.log(Data)
  
  
  
    document.getElementById("calculosCumbustible").onclick = function(){
  
      
  
      let div = document.createElement('tbody');
      alert(
          "En este momento tenemos disponibles en nuestra base de datos estos tres Aeropuertos"
        );
     
        
        for (let i = 0; i <Data.length; i++) {
          div.innerHTML +=
              `
            
            
              <td scope="row" class="text-start">${Data[i].nombre}</td>
              <td><svg class="bi" width="24" height="24"><use xlink:href="#check"/></svg>${Data[i].aeroNafta}</td>
              <td><svg class="bi" width="24" height="24"><use xlink:href="#check"/></svg>${Data[i].JetA1}</td>
              <td><svg class="bi" width="24" height="24"><use xlink:href="#check"/></svg>${Data[i].JetA1}</td>
             
      `
      
  
        }
        contenedor.appendChild(div);
    
    }