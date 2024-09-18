let apiKey = '438abd6e2081a34c4871bde0ecd7c0dc';  
    let city = 'Riyadh';

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
           
            let cityName = data.name;
            let temperature = data.main.temp;
            let humidity = data.main.humidity;
            let latitude = data.coord.lat;
            let longitude = data.coord.lon;

           
            document.getElementById('city').textContent = cityName;
            document.getElementById('temperature').textContent = temperature;
            document.getElementById('humidity').textContent = humidity;
            document.getElementById('latitude').textContent = latitude;
            document.getElementById('longitude').textContent = longitude;
        })
        .catch(error => {
            console.error('error', error);
        });