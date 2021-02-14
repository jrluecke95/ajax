// fetch("http://api.openweathermap.org/data/2.5/weather?q=Atlanta&units=imperial&appid=16b98922cbf6a3314343414c043da48e"
// );

// $.get("http://www.omdbapi.com/?apikey=59354c85&s=" + $urlEncodedSearchString) 
// .then((data) => {
//     let movieHTML = renderMovies(response.data.Search)
//     $movieContainer.html = movieHTML

// console.log($.getJSON("http://api.openweathermap.org/data/2.5/weather?&units=imperial&zip=30314,us&appid=16b98922cbf6a3314343414c043da48e"))


// parse data and organize it into drop down

$(document).ready(function () {
    const $button = $('#weatherButton');
    const $zipcode = $('#zipcode')
    const $temp = $('#temp')
    $button.on('click', (e) => {
        e.preventDefault()
        const weatherInfo = $.getJSON(`http://api.openweathermap.org/data/2.5/weather?&units=imperial&zip=${$zipcode.val()},us&appid=16b98922cbf6a3314343414c043da48e`)
        console.log(JSON.parse(weatherInfo))
    })


    
})