let time = document.querySelector(".in-box1");
let am_pm = document.querySelector(".am-pm") 
let cell = document.querySelector(".in-cel");
let wind = document.querySelector(".wind");
let btn = document.querySelector(".btn");
let text = document.querySelector("#text");
let description = document.querySelector(".description");
let logo = document.querySelector(".logo");
let pressure = document.querySelector(".pressure");
let precip = document.querySelector(".precip");
let wind_dir = document.querySelector(".wind_dir");

// document.addEventListener("DOMContentLoaded", () => {
//   setInterval(showTime, 1000);
// });

// const showTime = () => {
//   const date = new Date();
//   const hr = date.getHours();
//   if(hr>12){
//     am_pm.innerHTML = "PM"
//   }
//   else{
//     am_pm.innerHTML = "AM"
//   }
// };
btn.addEventListener("click", () => {
  const a = text.value;
  if (a === "") {
    alert("Enter City name");
  }
  // else{
  const url = `https://api.weatherapi.com/v1/current.json?q=${a}&key=aba93a92e3234fc1a02111751242001`;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      } else {
        return response.json();
      }
    })
    .then((data) => {
      console.log(data);
      cell.innerHTML = data.current.temp_c;
      wind.innerHTML = data.current.wind_kph;
      description.innerHTML = data.current.condition.text;
      const iconUrl = data.current.condition.icon;
      document.querySelector(".logo-img").src = iconUrl;
      pressure.innerHTML = data.current.pressure_mb;
      precip.innerHTML = data.current.precip_mm;
      time.innerHTML = data.location.localtime;
      wind_dir.innerHTML = data.current.wind_dir;
    })
    .catch((error) => {
      // You can provide user-friendly error handling here.
      // For example, display an error message on the page.
      description.innerHTML = "Error fetching weather data.";
    });
  // }
});
