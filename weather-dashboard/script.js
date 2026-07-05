// OpenWeatherMap API Configuration
const API_KEY = 'a6d7f4cc921218183e2559e3d7a62803'; // Free tier API key
const API_BASE_URL = 'https://api.openweathermap.org/data/2.5';
const GEO_API_URL = 'https://api.openweathermap.org/geo/1.0';

let currentSearchTerm = '';
let selectedSuggestion = -1;

// DOM Elements
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const locationBtn = document.getElementById('locationBtn');
const suggestionsDiv = document.getElementById('suggestions');
const loadingDiv = document.getElementById('loading');
const errorDiv = document.getElementById('error');
const weatherContainer = document.getElementById('weatherContainer');
const welcomeMessage = document.getElementById('welcomeMessage');
const forecastContainer = document.getElementById('forecastContainer');

// Event Listeners
searchBtn.addEventListener('click', handleSearch);
locationBtn.addEventListener('click', handleLocationClick);
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleSearch();
});
searchInput.addEventListener('input', handleSearchInput);
searchInput.addEventListener('keydown', handleArrowKeys);
document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-section')) {
        suggestionsDiv.style.display = 'none';
    }
});

// Handle Search Input for Autocomplete
async function handleSearchInput(e) {
    currentSearchTerm = e.target.value.trim();
    selectedSuggestion = -1;

    if (currentSearchTerm.length < 2) {
        suggestionsDiv.style.display = 'none';
        return;
    }

    try {
        const response = await fetch(
            `${GEO_API_URL}/direct?q=${currentSearchTerm}&limit=5&appid=${API_KEY}`
        );
        const cities = await response.json();

        if (cities.length === 0) {
            suggestionsDiv.style.display = 'none';
            return;
        }

        suggestionsDiv.innerHTML = '';
        cities.forEach((city, index) => {
            const suggestionItem = document.createElement('div');
            suggestionItem.className = 'suggestion-item';
            suggestionItem.textContent = `${city.name}, ${city.country}`;
            suggestionItem.addEventListener('click', () => {
                searchInput.value = `${city.name}, ${city.country}`;
                suggestionsDiv.style.display = 'none';
                fetchWeatherByCoordinates(city.lat, city.lon);
            });
            suggestionsDiv.appendChild(suggestionItem);
        });
        suggestionsDiv.style.display = 'block';
    } catch (error) {
        console.error('Error fetching suggestions:', error);
    }
}

// Handle Arrow Key Navigation
function handleArrowKeys(e) {
    const suggestions = Array.from(suggestionsDiv.querySelectorAll('.suggestion-item'));
    if (suggestions.length === 0) return;

    if (e.key === 'ArrowDown') {
        e.preventDefault();
        selectedSuggestion = Math.min(selectedSuggestion + 1, suggestions.length - 1);
        updateSuggestionSelection(suggestions);
    } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        selectedSuggestion = Math.max(selectedSuggestion - 1, -1);
        updateSuggestionSelection(suggestions);
    } else if (e.key === 'Enter' && selectedSuggestion >= 0) {
        e.preventDefault();
        suggestions[selectedSuggestion].click();
    }
}

function updateSuggestionSelection(suggestions) {
    suggestions.forEach((item, index) => {
        item.classList.toggle('active', index === selectedSuggestion);
    });
}

// Handle Search
async function handleSearch() {
    const searchTerm = searchInput.value.trim();
    if (!searchTerm) return;

    try {
        showLoading();
        const response = await fetch(
            `${GEO_API_URL}/direct?q=${searchTerm}&limit=1&appid=${API_KEY}`
        );
        const cities = await response.json();

        if (cities.length === 0) {
            showError('City not found. Please try another search.');
            return;
        }

        const city = cities[0];
        fetchWeatherByCoordinates(city.lat, city.lon);
    } catch (error) {
        showError('Error searching for city: ' + error.message);
    }
}

// Handle Location Click
function handleLocationClick() {
    if (navigator.geolocation) {
        showLoading();
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                fetchWeatherByCoordinates(latitude, longitude);
            },
            (error) => {
                showError('Unable to get your location: ' + error.message);
            }
        );
    } else {
        showError('Geolocation is not supported by your browser.');
    }
}

// Fetch Weather by Coordinates
async function fetchWeatherByCoordinates(lat, lon) {
    try {
        showLoading();
        suggestionsDiv.style.display = 'none';

        // Fetch current weather
        const weatherResponse = await fetch(
            `${API_BASE_URL}/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
        );
        const weatherData = await weatherResponse.json();

        // Fetch forecast
        const forecastResponse = await fetch(
            `${API_BASE_URL}/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
        );
        const forecastData = await forecastResponse.json();

        displayWeather(weatherData, forecastData);
        hideError();
    } catch (error) {
        showError('Error fetching weather data: ' + error.message);
    } finally {
        hideLoading();
    }
}

// Display Weather
function displayWeather(weatherData, forecastData) {
    // Current Weather
    document.getElementById('cityName').textContent = 
        `${weatherData.name}, ${weatherData.sys.country}`;
    document.getElementById('weatherDescription').textContent = weatherData.weather[0].description;
    document.getElementById('temperature').textContent = Math.round(weatherData.main.temp) + '°C';
    document.getElementById('tempMin').textContent = `Min: ${Math.round(weatherData.main.temp_min)}°C`;
    document.getElementById('tempMax').textContent = `Max: ${Math.round(weatherData.main.temp_max)}°C`;
    
    // Weather Icon
    const iconCode = weatherData.weather[0].icon;
    document.getElementById('weatherIcon').src = 
        `https://openweathermap.org/img/wn/${iconCode}@4x.png`;

    // Weather Details
    document.getElementById('humidity').textContent = weatherData.main.humidity + '%';
    document.getElementById('windSpeed').textContent = weatherData.wind.speed + ' m/s';
    document.getElementById('feelsLike').textContent = Math.round(weatherData.main.feels_like) + '°C';
    document.getElementById('clouds').textContent = weatherData.clouds.all + '%';
    document.getElementById('pressure').textContent = weatherData.main.pressure + ' hPa';
    document.getElementById('visibility').textContent = (weatherData.visibility / 1000).toFixed(2) + ' km';

    // Sunrise and Sunset
    document.getElementById('sunrise').textContent = new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit'
    });
    document.getElementById('sunset').textContent = new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit'
    });

    // Coordinates
    document.getElementById('coordinates').textContent = 
        `${weatherData.coord.lat.toFixed(2)}, ${weatherData.coord.lon.toFixed(2)}`;

    // Last Updated
    document.getElementById('lastUpdated').textContent = new Date().toLocaleTimeString();

    // Forecast
    displayForecast(forecastData);

    // Show weather container
    welcomeMessage.style.display = 'none';
    weatherContainer.style.display = 'block';
}

// Display 5-Day Forecast
function displayForecast(forecastData) {
    forecastContainer.innerHTML = '';
    const forecastMap = {};

    // Group forecast by day
    forecastData.list.forEach(item => {
        const date = new Date(item.dt * 1000).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric'
        });

        if (!forecastMap[date]) {
            forecastMap[date] = item;
        }
    });

    // Display first 5 days
    Object.keys(forecastMap).slice(0, 5).forEach(date => {
        const item = forecastMap[date];
        const forecastCard = document.createElement('div');
        forecastCard.className = 'forecast-card';
        forecastCard.innerHTML = `
            <div class="date">${date}</div>
            <div class="icon">
                <img src="https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png" alt="${item.weather[0].description}">
            </div>
            <div class="temp">${Math.round(item.main.temp)}°C</div>
            <div class="description">${item.weather[0].main}</div>
        `;
        forecastContainer.appendChild(forecastCard);
    });
}

// UI Helper Functions
function showLoading() {
    loadingDiv.style.display = 'flex';
    errorDiv.style.display = 'none';
}

function hideLoading() {
    loadingDiv.style.display = 'none';
}

function showError(message) {
    errorDiv.textContent = '❌ ' + message;
    errorDiv.style.display = 'block';
    weatherContainer.style.display = 'none';
    welcomeMessage.style.display = 'block';
}

function hideError() {
    errorDiv.style.display = 'none';
}

// Initialize
window.addEventListener('load', () => {
    welcomeMessage.style.display = 'block';
    weatherContainer.style.display = 'none';
});
