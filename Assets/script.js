var latitude = 44.34
var longitude = 10.99
var key = "c081c9efc0c0095c72207c4778abebcf"
var weatherAPI = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${key}`


console.log(`hello`)


        function fetchWeather() {

            fetch(weatherAPI)
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    console.log(data);
                });
        }

        fetchWeather()