# 🎭 TREND WITH ZAXX - Joke Generator

A fun and interactive random joke generator using the Official Joke API.

## 🌟 Features

✅ **Random Joke Generator** - Get random jokes with a click
✅ **Multiple Categories** - General, Programming, and Knock-Knock jokes
✅ **Beautiful UI** - Modern gradient design with smooth animations
✅ **Copy to Clipboard** - Easily share jokes with friends
✅ **Joke Counter** - Track how many jokes you've loaded
✅ **Category Filter** - Select jokes by type
✅ **Setup/Delivery Format** - Support for two-part jokes
✅ **Fully Responsive** - Works on mobile, tablet, and desktop
✅ **No API Key Required** - Uses free, public API

## 🎯 Joke Categories

- **🎲 Random** - Mix of all joke types
- **😂 General** - Classic funny jokes
- **💻 Programming** - Developer-focused humor
- **🚪 Knock-Knock** - Classic knock-knock jokes

## 📱 How to Use

1. **Get a Joke** - Click "Get New Joke 😂" button
2. **Filter by Category** - Click "Filter by Category" to select joke type
3. **Copy Joke** - Click "Copy Joke 📋" to copy to clipboard
4. **Share** - Paste the joke anywhere to share with friends

## 🔧 Technologies Used

- **HTML5** - Semantic structure
- **CSS3** - Modern styling with animations
- **JavaScript (ES6)** - Async/await API calls
- **Fetch API** - External API integration
- **Official Joke API** - Free public API

## 📡 API Details

**Base URL:** `https://official-joke-api.appspot.com`

### Endpoints Used:

```
GET /jokes/{category}/random
```

**Supported Categories:**
- `general` - General jokes
- `programming` - Programming jokes
- `knock-knock` - Knock-knock jokes

**Response Format:**
```json
{
  "type": "general",
  "setup": "Why...",
  "delivery": "Because...",
  "id": 123
}
```

## 🚀 Quick Start

### Method 1: Direct Open
1. Download the files
2. Open `index.html` in browser
3. Start getting jokes!

### Method 2: Live Server
```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js
npx http-server
```

Then visit: `http://localhost:8000/joke-generator/`

## 📊 Statistics

- Joke Counter tracks total jokes loaded
- Category display shows current filter
- Real-time updates on selection

## 🎨 Design Features

- Gradient background (Purple to Blue)
- Smooth animations on interactions
- Responsive grid layout
- Touch-friendly buttons
- Modal category selector
- Loading animations
- Success feedback on copy

## 💻 Browser Support

✅ Chrome (Latest)
✅ Firefox (Latest)
✅ Safari (Latest)
✅ Edge (Latest)
✅ Mobile Browsers

## 🔄 How It Works

1. **User clicks "Get New Joke"**
2. **Script fetches from API**
3. **Response is parsed**
4. **Joke is displayed with type**
5. **Counter increments**
6. **User can copy or get another**

## 📝 Example API Call

```javascript
const response = await fetch(
  'https://official-joke-api.appspot.com/jokes/programming/random'
);
const joke = await response.json();
console.log(joke.setup, joke.delivery);
```

## 🌐 Live Demo

Open `index.html` in your browser to see it in action!

## 🎁 Future Enhancements

- 🌙 Dark mode
- 💾 Save favorite jokes
- 📊 Statistics dashboard
- 🔊 Text-to-speech
- 🌍 Multi-language support
- ⭐ Rating system
- 📤 Share to social media

## 📄 License

MIT License - Free to use and modify

## 👨‍💻 Created by

**TREND WITH ZAXX** - [@zxhxd272006](https://github.com/zxhxd272006)

---

**Enjoy the laughs! 😂**
