document.getElementById("currentyear").textContent = new Date().getFullYear();

document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

const temperature = 5.4;
const windSpeed = 10;


function calculateWindChill(temp, speed) {
    return (
        13.12 +
        0.6215 * temp -
        11.37 * Math.pow(speed, 0.16) +
        0.3965 * temp * Math.pow(speed, 0.16)
    );
}

let windChillValue;

if (temperature <= 10 && windSpeed > 4.8) {
    windChillValue = calculateWindChill(temperature, windSpeed).toFixed(1) + " °C";
} else {
    windChillValue = "N/A";
}

const weatherList = document.querySelector(".weather-box ul");
const windChillItem = weatherList.querySelector("li:nth-child(4)");

const windChillValueSpan = windChillItem.querySelector(".value");

windChillValueSpan.textContent = windChillValue;