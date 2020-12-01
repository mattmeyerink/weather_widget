var form = $('#weather').get(0);
var city = $('#city').get(0);

const API_KEY = '363c76b6a6ee42eeb9d7828dd78656b9'

$('#weatherCard').hide()

form.addEventListener('submit', function(event) {
    event.preventDefault();

    if (city.value) {
        var apiURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + city.value + '&units=imperial&appid=' + API_KEY;

        $.get(apiURL, function(data) {
            console.log(data);

            $('#cityName').text(data.name);

            var iconURL = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
            $('#iconImage').attr('src', iconURL);

            var description = data.weather[0].description.split(' ');
            for (var i = 0; i < description.length; i++) {
                description[i] = description[i].charAt(0).toUpperCase() + description[i].slice(1);
            }
            description = description.join(' ');
            $('#description').text(description);

            $('#currentTemp').text("Current Temperature: " + data.main.temp + " F");
            $('#max').text("High: " + data.main.temp_max + " F");
            $('#min').text("Low: " + data.main.temp_min + " F");
            $('#feelsLike').text("Feels Like: " + data.main.feels_like + " F");
            $('#humidity').text("Humidity: " + data.main.humidity + "%");
        })

        $('#weatherCard').show()
        $('#input').hide()
    }
})

document.getElementById('changeCity').onclick = function() {
    $('#weatherCard').hide()
    $('#input').show()
}
