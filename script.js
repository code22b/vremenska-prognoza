async function getWeather() {
    const city = document.getElementById("cityInput").value;
    const apiKey = "7ab786b32a6af0ba421da578b436a5d4"; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=hr`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.cod === 200) {
            document.getElementById("weatherResult").innerHTML = `
                <h2>${data.name}</h2>
                <p>${data.weather[0].description}</p>
                <p>Temperatura: ${data.main.temp}°C</p>
                <p>Vlažnost: ${data.main.humidity}%</p>
                <p>Vjetar: ${data.wind.speed} m/s</p>
            `;
        } else {
            document.getElementById("weatherResult").innerHTML = "<p>Grad nije pronađen.</p>";
        }
    } catch (error) {
        document.getElementById("weatherResult").innerHTML = "<p>Greška prilikom dohvaćanja podataka.</p>";
    }
}
