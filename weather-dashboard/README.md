# 🌤️ TREND WITH ZAXX - Weather Dashboard

A beautiful and responsive weather dashboard that fetches real-time weather data using the OpenWeatherMap API.

## ✨ Features

✅ **Real-time Weather Data** - Current conditions for any location
✅ **Autocomplete Search** - Search suggestions as you type
✅ **Geolocation Support** - Get weather for your current location
✅ **5-Day Forecast** - View upcoming weather predictions
✅ **Detailed Metrics** - Humidity, wind speed, pressure, visibility, etc.
✅ **Sunrise/Sunset Times** - Know daylight hours
✅ **Beautiful UI** - Modern gradient design with smooth animations
✅ **Fully Responsive** - Works on mobile, tablet, and desktop
✅ **Arrow Key Navigation** - Navigate suggestions with keyboard
✅ **Real-time Updates** - Always shows current time

## 📊 Weather Information Displayed

### Current Weather
- 🌡️ Temperature (current, min, max)
- 📍 Location (city, country, coordinates)
- 🎨 Weather icon
- 📝 Weather description

### Detailed Metrics
- 💧 Humidity percentage
- 💨 Wind speed
- 🌡️ "Feels like" temperature
- ☁️ Cloudiness percentage
- 🔽 Atmospheric pressure
- 👁️ Visibility distance

### Additional Info
- 🌅 Sunrise time
- 🌇 Sunset time
- 📅 5-Day forecast
- ⏰ Last updated time

## 🚀 How to Use

### Search by City
1. Click on the search input
2. Start typing a city name
3. Select from suggestions or press Enter
4. Weather data loads automatically

### Use Your Location
1. Click the "📍 My Location" button
2. Allow location access when prompted
3. Weather for your location displays instantly

### Navigate Suggestions
- **Arrow Down/Up** - Navigate through suggestions
- **Enter** - Select highlighted suggestion
- **Esc** - Close suggestions

## 🛠️ Technologies Used

- **HTML5** - Semantic structure
- **CSS3** - Modern styling with gradients and animations
- **JavaScript (ES6)** - Async/await API calls
- **Fetch API** - HTTP requests
- **Geolocation API** - Browser location services
- **OpenWeatherMap API** - Weather data provider

## 🌍 API Details

**Provider:** OpenWeatherMap (Free Tier)

**Base URLs:**
```
Weather: https://api.openweathermap.org/data/2.5/weather
Forecast: https://api.openweathermap.org/data/2.5/forecast
Geocoding: https://api.openweathermap.org/geo/1.0/direct
```

**Features:**
- No authentication required for demo key
- 60 calls/minute rate limit (free tier)
- Metric units support
- 5-day forecast with 3-hour intervals

## 📦 Project Structure

```
weather-dashboard/
├── index.html       # Main HTML structure
├── style.css        # Styling and animations
├── script.js        # Weather API integration
└── README.md        # Documentation
```

## 🚀 Quick Start

### Option 1: Direct Open
1. Download the files
2. Open `index.html` in your browser
3. Start searching for weather!

### Option 2: Local Server (Recommended)

**Python 3:**
```bash
python -m http.server 8000
```

**Python 2:**
```bash
python -m SimpleHTTPServer 8000
```

**Node.js:**
```bash
npx http-server
```

Then visit: `http://localhost:8000/weather-dashboard/`

## 🎨 Design Features

- **Gradient Backgrounds** - Purple to blue gradient
- **Card-based Layout** - Easy-to-scan information
- **Smooth Animations** - Slide, fade, and scale effects
- **Hover Effects** - Interactive feedback
- **Loading States** - Spinner animation
- **Error Handling** - Clear error messages
- **Mobile Optimized** - Touch-friendly buttons

## 📱 Browser Support

✅ Chrome/Edge (Latest)
✅ Firefox (Latest)
✅ Safari (Latest)
✅ Mobile Browsers (iOS Safari, Chrome Mobile)
✅ Geolocation support recommended

## 🔑 API Key Configuration

The dashboard includes a demo API key that works for testing. For production:

1. Get a free API key: https://openweathermap.org/api
2. Replace `API_KEY` in `script.js`:
```javascript
const API_KEY = 'YOUR_API_KEY_HERE';
```

## 🎯 Supported Features

### Search Functionality
- City name search
- Country code support
- Autocomplete suggestions
- Keyboard navigation

### Location Features
- Geolocation with browser permission
- Coordinate display
- Timezone handling

### Weather Data
- Real-time conditions
- 5-day forecast
- Historical data (when available)
- Multi-language support

## 🐛 Error Handling

- Network error messages
- Invalid location feedback
- Geolocation permission handling
- Timeout management

## 🚀 Future Enhancements

- 🌙 Dark mode toggle
- 📍 Save favorite locations
- 📊 Weather history charts
- ⚠️ Weather alerts
- 🗣️ Text-to-speech
- 🌍 Multi-language support
- 🎨 Customizable themes
- 📱 PWA support
- ☔ Rain probability
- 🌊 UV index

## 📝 License

MIT License - Free to use and modify

## 👤 Created by

**TREND WITH ZAXX** - [@zxhxd272006](https://github.com/zxhxd272006)

---

**Enjoy the weather dashboard! 🌤️**
