var key = "c081c9efc0c0095c72207c4778abebcf";
var date = dayjs().format(`M/D/YY`);

console.log(date);

console.log(`hello`);

$('#searchBtn').on('click', function () {
    var cityInput = $('#input').val().trim();
    console.log(cityInput);

    if ($(this).attr('class') === 'dataOne') {
        localStorage.cityOne = cityInput;
        var checkOne = localStorage.getItem('cityOne');
        if (checkOne) {
            $(".lastLog").append('<li id="miniDataOne"> Test </li>').after(function () {
                document.getElementById('miniDataOne').innerHTML = localStorage.cityOne;

                var weatherAPI = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=imperial&appid=${key}`;

                fetch(weatherAPI)
                    .then(response => response.json())
                    .then(data => {
                        $('#currentTemp').html(`Temperature: ${data.main.temp}°F`);
                        $('#currentWind').html(`Wind: ${data.wind.speed} m/s`);
                        $('#currentHumidity').html(`Humidity: ${data.main.humidity}%`);
                        $('#currentDate').html(date);
                        $('#currentSearch').html(cityInput);

                        var iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

                        $('#currentIcon').html(`<img src="${iconUrl}" alt="Weather Icon">`);
                    })
                    .catch(error => console.error('Error fetching data:', error));
            });
            $('#searchBtn').toggleClass('dataOne dataTwo');
        }
    } else if ($(this).attr('class') === 'dataTwo') {
        localStorage.cityTwo = cityInput;
        var checkTwo = localStorage.getItem('cityTwo');
        if (checkTwo) {
            $(".lastLog").append('<li id="miniDataTwo"> Test </li>').after(function () {
                document.getElementById('miniDataTwo').innerHTML = localStorage.cityTwo;
            });
            $('#searchBtn').toggleClass('dataTwo dataThree');
        }
    } else if ($(this).attr('class') === 'dataThree') {
        localStorage.cityThree = cityInput;
        var checkThree = localStorage.getItem('cityThree');
        if (checkThree) {
            $(".lastLog").append('<li id="miniDataThree"> Test </li>').after(function () {
                document.getElementById('miniDataThree').innerHTML = localStorage.cityThree;
            });
            $('#searchBtn').toggleClass('dataThree dataFour');
        }
    } else if ($(this).attr('class') === 'dataFour') {
        localStorage.cityFour = cityInput;
        var checkFour = localStorage.getItem('cityFour');
        if (checkFour) {
            $(".lastLog").append('<li id="miniDataFour"> Test </li>').after(function () {
                document.getElementById('miniDataFour').innerHTML = localStorage.cityFour;
            });
        }
    }
});



        // function fetchWeather() {

        //     fetch(weatherAPI)
        //         .then(function (response) {
        //             return response.json();
        //         })
        //         .then(function (data) {
        //             console.log(data);
        //         });
        // }

        // fetchWeather()