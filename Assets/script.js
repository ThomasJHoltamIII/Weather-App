var key = "c081c9efc0c0095c72207c4778abebcf";
var date = dayjs().format(`M/D/YY`);

console.log(date);

console.log(`hello`);

$(document).ready(function () {

// Functions to pass data from API to the main day and 5-day car elements
function updateWeatherAndForecast(cityInput) {
    var weatherAPI = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=imperial&appid=${key}`;
    
    fetch(weatherAPI) 
        .then(response => response.json())
        .then(data => {
            // Builds out the empty html elements for the hero section that displays current dates data
            $('#currentTemp').html(`Temperature: ${data.main.temp}°F`);
            $('#currentWind').html(`Wind: ${data.wind.speed} m/s`);
            $('#currentHumidity').html(`Humidity: ${data.main.humidity}%`);
            $('#currentDate').html(date);
            $('#currentSearch').html(cityInput);
            var iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
            $('#currentIcon').html(`<img src="${iconUrl}" alt="Weather Icon">`);
        })
        // "catch" errors, passes the error data to the console error log and displays it
        .catch(error => console.error('Error fetching current weather data:', error));
    updateForecastData(cityInput);
}

function updateForecastData(cityInput) {
    var forecastAPI = `https://api.openweathermap.org/data/2.5/forecast?q=${cityInput}&units=imperial&appid=${key}`;

    fetch(forecastAPI)
        .then(response => response.json())
        .then(data => {
            // Filter to sort data by pieces that include noon (12:00:00)
            const forecastList = data.list.filter(item => item.dt_txt.includes('12:00:00'));
            // Takes the sorted data and adds an i variable to count up through all 5 of the days data taken from the API
            for (let i = 0; i < forecastList.length; i++) {
                const dayData = forecastList[i];
                // Uses dayjs format to have openweathers data display uniformly
                $(`#day${i + 1}Date`).html(dayjs(dayData.dt_txt).format('M/D/YY'));
                $(`#day${i + 1}Temp`).html(`Temperature: ${dayData.main.temp}°F`);
                $(`#day${i + 1}Wind`).html(`Wind: ${dayData.wind.speed} m/s`);
                $(`#day${i + 1}Humidity`).html(`Humidity: ${dayData.main.humidity}%`);
                // Uses openweathers built in icons to place a .png inside the html li icon element
                const iconUrl = `https://openweathermap.org/img/wn/${dayData.weather[0].icon}.png`;
                $(`#day${i + 1}Icon`).html(`<img src="${iconUrl}" alt="Weather Icon">`);
            }
        })
        .catch(error => console.error('Error fetching forecast data:', error));
}

// On click of the search this stores the localdata from the input and then cycles up the dataClass so up to eight citys can be stored
// This is also appending li's to the empty ul for past searches in the html
$('#searchBtn').on('click', function () {
    var cityInput = $('#input').val().trim();
    console.log(cityInput)

    if ($(this).attr('class') === 'dataOne') {
        localStorage.cityOne = cityInput;
        var checkOne = localStorage.getItem('cityOne');
        if (checkOne) {
            // Appends the li to the ul and gives them classes and id's to pull from localStorage dynamically and to run the reSearch function
            $(".lastLog").append('<li class="reSearch" id="miniDataOne"> Invalid! </li>').after(function () {
                document.getElementById('miniDataOne').innerHTML = localStorage.cityOne;
                updateWeatherAndForecast(cityInput);
            });
            $('#searchBtn').toggleClass('dataOne dataTwo');
        }

    } else if ($(this).attr('class') === 'dataTwo') {
        localStorage.cityTwo = cityInput;
        var checkTwo = localStorage.getItem('cityTwo');
        if (checkTwo) {
            // if ($('#currentTemp').text().includes('Temperature'))
            $(".lastLog").append('<li class="reSearch" id="miniDataTwo"> Invalid! </li>').after(function () {
                document.getElementById('miniDataTwo').innerHTML = localStorage.cityTwo
                updateWeatherAndForecast(cityInput);
            });
            $('#searchBtn').toggleClass('dataTwo dataThree');
        }
    

    } else if ($(this).attr('class') === 'dataTwo') {
        localStorage.cityTwo = cityInput;
        var checkTwo = localStorage.getItem('cityTwo');
        if (checkTwo) {
            
            $(".lastLog").append('<li class="reSearch" id="miniDataTwo"> Invalid! </li>').after(function () {
                document.getElementById('miniDataTwo').innerHTML = localStorage.cityTwo
                updateWeatherAndForecast(cityInput);
            });
            $('#searchBtn').toggleClass('dataTwo dataThree');
        }

    } else if ($(this).attr('class') === 'dataThree') {
        localStorage.cityThree = cityInput;
        var checkThree = localStorage.getItem('cityThree');
        if (checkThree) {
            $(".lastLog").append('<li class="reSearch" id="miniDataThree"> Invalid! </li>').after(function () {
                document.getElementById('miniDataThree').innerHTML = localStorage.cityThree;
                updateWeatherAndForecast(cityInput);
            });
            $('#searchBtn').toggleClass('dataThree dataFour');
        }

    } else if ($(this).attr('class') === 'dataFour') {
        localStorage.cityFour = cityInput;
        var checkFour = localStorage.getItem('cityFour');
        if (checkFour) {
            $(".lastLog").append('<li id="miniDataFour"> Invalid! </li>').after(function () {
                document.getElementById('miniDataFour').innerHTML = localStorage.cityFour;
                updateWeatherAndForecast(cityInput);
            });
            $('#searchBtn').toggleClass('dataFour dataFive');
        }

        } else if ($(this).attr('class') === 'dataFive') {
            localStorage.cityFive = cityInput;
            var checkFive = localStorage.getItem('cityFive');
            if (checkFive) {
                $(".lastLog").append('<li id="miniDataFive"> Invalid! </li>').after(function () {
                    document.getElementById('miniDataFive').innerHTML = localStorage.cityFive;
                    updateWeatherAndForecast(cityInput);
                });
                $('#searchBtn').toggleClass('dataFive dataSix');
            }

        } else if ($(this).attr('class') === 'dataSix') {
            localStorage.citySix = cityInput;
            var checkSix = localStorage.getItem('citySix');
            if (checkSix) {
                $(".lastLog").append('<li id="miniDataSix"> Invalid! </li>').after(function () {
                    document.getElementById('miniDataSix').innerHTML = localStorage.citySix;
                    updateWeatherAndForecast(cityInput);
                    
                });
            $('#searchBtn').toggleClass('dataSix dataSeven'); 
        }

        } else if ($(this).attr('class') === 'dataSeven') {
            localStorage.citySeven = cityInput;
            var checkSeven = localStorage.getItem('citySeven');
            if (checkSeven) {
                $(".lastLog").append('<li id="miniDataSeven"> Invalid! </li>').after(function () {
                    document.getElementById('miniDataSeven').innerHTML = localStorage.citySeven;
                    updateWeatherAndForecast(cityInput);
                });
                $('#searchBtn').toggleClass('dataSeven dataEight');
            }

        } else if ($(this).attr('class') === 'dataEight') {
            localStorage.cityEight = cityInput;
            var checkEight = localStorage.getItem('cityEight');
            if (checkEight) {
                $(".lastLog").append('<li class="reSearch" id="miniDataEight"> Invalid! </li>').after(function () {
                    document.getElementById('miniDataEight').innerHTML = localStorage.cityEight
                    updateWeatherAndForecast(cityInput);
                    $('#searchBtn').toggleClass('dataEight dataOne');
                });
            }
        }
        }
    );

    // a reSearch click function to reSearch past searches from the list, copy and pasted the previous functions and added a 2 to the variables so this functions independantly
    $('.lastLog').on('click', '.reSearch', function () {
        var cityInput2 = $(this).text().trim();
        updateWeatherAndForecast(cityInput2);
    });

    function updateWeatherAndForecast(cityInput2) {
        var weatherAPI2 = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput2}&units=imperial&appid=${key}`;

        fetch(weatherAPI2)
            .then(response => response.json())
            .then(data => {
                $('#currentTemp').html(`Temperature: ${data.main.temp}°F`);
                $('#currentWind').html(`Wind: ${data.wind.speed} m/s`);
                $('#currentHumidity').html(`Humidity: ${data.main.humidity}%`);
                $('#currentDate').html(date);
                $('#currentSearch').html(cityInput2);
                var iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
                $('#currentIcon').html(`<img src="${iconUrl}" alt="Weather Icon">`);
            })
            .catch(error => console.error('Error fetching current weather data:', error));

        updateForecastData(cityInput2);
    }

    function updateForecastData(cityInput2) {
        var forecastAPI = `https://api.openweathermap.org/data/2.5/forecast?q=${cityInput2}&units=imperial&appid=${key}`;

        fetch(forecastAPI)
            .then(response => response.json())
            .then(data => {
                const forecastList = data.list.filter(item => item.dt_txt.includes('12:00:00'));
                for (let i = 0; i < forecastList.length; i++) {
                    const dayData = forecastList[i];
                    $(`#day${i + 1}Date`).html(dayjs(dayData.dt_txt).format('M/D/YY'));
                    $(`#day${i + 1}Temp`).html(`Temperature: ${dayData.main.temp}°F`);
                    $(`#day${i + 1}Wind`).html(`Wind: ${dayData.wind.speed} m/s`);
                    $(`#day${i + 1}Humidity`).html(`Humidity: ${dayData.main.humidity}%`);
                    const iconUrl = `https://openweathermap.org/img/wn/${dayData.weather[0].icon}.png`;
                    $(`#day${i + 1}Icon`).html(`<img src="${iconUrl}" alt="Weather Icon">`);
                }
            })
            .catch(error => console.error('Error fetching forecast data:', error));
    }
});

