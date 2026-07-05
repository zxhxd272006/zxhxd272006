# Digital Clock - Multiple Timezones

🌍 A beautiful, responsive web application that displays the current time in different timezones around the world.

## Features

✨ **Key Features:**
- 📍 Display time in 28+ different timezones
- 🎨 Beautiful, modern UI with gradient background
- 📱 Fully responsive design (works on mobile, tablet, desktop)
- 🔄 Real-time clock updates every second
- ➕ Add or remove timezones dynamically
- 🕐 Toggle between 12-hour and 24-hour format
- 📅 Display date and day for each timezone
- 🎯 Smooth animations and hover effects

## Supported Timezones

- **Americas**: New York, Los Angeles, Chicago, Denver, Anchorage, Honolulu, Toronto, Mexico City, São Paulo
- **Europe**: London, Paris, Berlin, Rome, Madrid, Moscow
- **Africa**: Cairo, Johannesburg
- **Asia**: Tokyo, Shanghai, Hong Kong, Dubai, Kolkata, Bangkok, Singapore, Seoul, Manila
- **Pacific**: Sydney, Auckland

## How to Use

1. **View Clocks**: The page displays 3 default timezones (New York, London, Tokyo)
2. **Add Timezone**: Click the "+ Add Timezone" button to add more timezones
3. **Remove Timezone**: Click the "×" button on any clock card to remove it
4. **Toggle Format**: Click "Toggle 12/24 Hour" to switch between time formats
5. **Real-time Updates**: All clocks update automatically every second

## File Structure

```
.
├── index.html      # HTML structure
├── style.css       # Styling and animations
├── script.js       # JavaScript logic
└── README.md       # Documentation
```

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with gradients, grid layout, and animations
- **JavaScript (ES6)** - DOM manipulation and timezone handling
- **Intl API** - Browser's internationalization API for timezone conversion

## Browser Compatibility

- ✅ Chrome/Edge (Latest)
- ✅ Firefox (Latest)
- ✅ Safari (Latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Project Structure

### HTML
- Responsive grid layout for clock cards
- Modal for timezone selection
- Control buttons for adding timezones and toggling format

### CSS
- Gradient background with glassmorphism effects
- CSS Grid for responsive layout
- Smooth transitions and hover animations
- Mobile-first responsive design

### JavaScript
- Real-time clock updates using `setInterval()`
- Timezone conversion using `Intl.DateTimeFormat`
- Dynamic modal creation for timezone selection
- Local state management for selected timezones

## Installation & Running

### Method 1: Direct
1. Clone the repository
2. Open `index.html` in your web browser
3. Done! 🎉

### Method 2: Local Server (Recommended)
```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (http-server)
npx http-server
```

Then open `http://localhost:8000` in your browser.

## Future Enhancements

- 🌙 Dark mode toggle
- 💾 Save favorite timezones to localStorage
- 🔔 Alarm/reminder feature for specific timezones
- 🌐 Add weather information for each timezone
- ⚙️ Customizable clock appearance
- 🎵 Alarm sounds for multiple timezones

## License

MIT License - Feel free to use this project for personal or commercial purposes.

## Author

Created by [@zxhxd272006](https://github.com/zxhxd272006)

---

**Enjoy the Digital Clock! ⏰**
