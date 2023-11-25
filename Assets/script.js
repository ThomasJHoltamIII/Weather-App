var latitude = 44.34
var longitude = 10.99
var key = "c081c9efc0c0095c72207c4778abebcf"
var weatherAPI = `https://api.openweathermap.org/data/2.5/weather?q=${localStorage.cityOne}&units=imperial&appid=${key}`


console.log(`hello`)

$('#searchBtn').on('click', function () {
    var cityInput = $('#input').val().trim();
    console.log(cityInput);

    if ($(this).attr('class') === 'dataOne') {
        localStorage.cityOne = cityInput;
        var checkOne = localStorage.getItem('cityOne');
        if (checkOne) {
            $(".lastLog").append('<li id="miniDataOne"> Test </li>').after(function () {
                document.getElementById('miniDataOne').innerHTML = localStorage.cityOne;
            });
        }
        $('#searchBtn').toggleClass('dataOne dataTwo');
    }
    else if ($(this).attr('class') === 'dataTwo') {
        localStorage.cityTwo = cityInput;
        var checkTwo = localStorage.getItem('cityTwo');
        if (checkTwo) {
            $(".lastLog").append('<li id="miniDataTwo"> Test </li>').after(function () {
                document.getElementById('miniDataTwo').innerHTML = localStorage.cityTwo;
            });
        }
        $('#searchBtn').toggleClass('dataTwo dataThree');
    }

    else if ($(this).attr('class') === 'dataThree') {
        localStorage.cityThree = cityInput;
        var checkThree = localStorage.getItem('cityThree');
        if (checkThree) {
            $(".lastLog").append('<li id="miniDataThree"> Test </li>').after(function () {
                document.getElementById('miniDataThree').innerHTML = localStorage.cityThree;
            });
        }
        $('#searchBtn').toggleClass('dataThree dataFour');
    }

    else if ($(this).attr('class') === 'dataFour') {
        localStorage.cityFour = cityInput;
        var checkFour = localStorage.getItem('cityFour');
        if (checkFour) {
            $(".lastLog").append('<li id="miniDataFour"> Test </li>').after(function () {
                document.getElementById('miniDataFour').innerHTML = localStorage.cityFour;
            });
        }
    }
});



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