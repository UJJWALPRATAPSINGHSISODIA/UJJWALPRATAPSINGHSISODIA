const container = document.querySelector('.weather-container');
const search = document.querySelector('.weather-search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.weather-not-found');

search.addEventListener('click', () => {

    const APIKey = '3045dd712ffe6e702e3245525ac7fa38';
    const city = document.querySelector('.weather-search-box input').value;

    if (city === '')
        return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
        .then(response => response.json())
        .then(json => {

            if (json.cod === '404') {
                container.style.height = '400px';
                weatherBox.style.display = 'none';
                weatherDetails.style.display = 'none';
                error404.style.display = 'block';
                error404.classList.add('weather-fadeIn');
                return;
            }

            error404.style.display = 'none';
            error404.classList.remove('weather-fadeIn');

            const image = document.querySelector('.weather-box img');
            const temperature = document.querySelector('.weather-box .weather-temperature');
            const description = document.querySelector('.weather-box .weather-description');
            const humidity = document.querySelector('.weather-details .weather-humidity span');
            const wind = document.querySelector('.weather-details .weather-wind span');

            switch (json.weather[0].main) {
                case 'Clear':
                    image.src = '../../Images/weather-clear.png';
                    break;

                case 'Rain':
                    image.src = '../../Images/weather-rain.png';
                    break;

                case 'Snow':
                    image.src = '../../Images/weather-snow.png';
                    break;

                case 'Clouds':
                    image.src = '../../Images/weather-cloud.png';
                    break;

                case 'Haze':
                    image.src = '../../Images/weather-mist.png';
                    break;

                default:
                    image.src = '';
            }

            temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
            description.innerHTML = `${json.weather[0].description}`;
            humidity.innerHTML = `${json.main.humidity}%`;
            wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;

            weatherBox.style.display = '';
            weatherDetails.style.display = '';
            weatherBox.classList.add('weather-fadeIn');
            weatherDetails.classList.add('weather-fadeIn');
            container.style.height = '590px';


        });


});