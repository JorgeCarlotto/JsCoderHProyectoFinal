const form = document.querySelector(".formWeatherAPI");
const city = document.querySelector("#city");
const country = document.querySelector("#countrys");
const dinamicWhether = document.querySelector(".dinamicWhether");

function convertTemp(temperature) {
  //convierte temperatura de fahrenheit a Celcius
  return parseInt(temperature - 273.15);
}

function alert() {
  Swal.fire("Ciudad No Encontrada", "Intentalo denuevo", "error");
}

function warning() {
  Swal.fire("Ambos Campos Son Obligatorios", "Intentalo denuevo", "warning");
}

form.addEventListener("submit", (e) => { //evento ver clima
  e.preventDefault();

  if (city.value === "" || country.value === "") {
    warning();
    return;
  }

  API(city.value, country.value);
});

function API(city, country) { //llamado API OpenWeather

  const Id = "78a42e8e10578191b582656a57dcc4eb";
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${Id}`;

  fetch(url)
    .then((data) => {
      return data.json();
    })
    .then((dataJSON) => {
      if (dataJSON.cod === "404") {
        alert();
      } else {
        clear();
        weatherData(dataJSON);
      }
      
    })
    .catch((err) => {
      console.log(err);
    });
}

function weatherData(data) {
  const {
    name,
    main: { pressure, temp, temp_min, temp_max },
    wind: { deg, speed },
    weather: [arr],
  } = data;

  const degrees = convertTemp(temp);
  const min = convertTemp(temp_min);
  const max = convertTemp(temp_max);

  const div = document.createElement("div");

  div.innerHTML = `
        <h4 class="card-title pricing-card-title">Estación: ${name}</h4>
        <img src="https://openweathermap.org/img/wn/${arr.icon}@2x.png" alt="icon">
        <h2 class="card-title pricing-card-title">${degrees}°C</h2>
        <ul class="list-unstyled mt-3 mb-4">
        <li></li><p>Viento: ${deg}° Velocidad:${speed} Kt </p></li>
        <li><p>Max: ${max}°C</p></li>
        <li><p>Min: ${min}°C</p></li>
        <li><p>Presión Atmosférica: ${pressure} hPa</p></li>
        </ul>
    `;

  dinamicWhether.appendChild(div);
}

function clear() {
  dinamicWhether.innerHTML = "";
}
