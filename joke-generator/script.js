// Joke Generator API Configuration
const API_URL = 'https://official-joke-api.appspot.com';
let currentJoke = {};
let jokeCount = 0;
let selectedCategory = 'random';
const categories = ['general', 'programming', 'knock-knock'];

// DOM Elements
const getJokeBtn = document.getElementById('getJoke');
const toggleCategoryBtn = document.getElementById('toggleCategory');
const copyJokeBtn = document.getElementById('copyJoke');
const jokeTypeEl = document.getElementById('jokeType');
const jokeTextEl = document.getElementById('jokeText');
const jokeSetupEl = document.getElementById('jokeSetup');
const jokeDeliveryEl = document.getElementById('jokeDelivery');
const jokeCountEl = document.getElementById('jokeCount');
const currentCategoryEl = document.getElementById('currentCategory');
const categoryModal = document.getElementById('categoryModal');
const closeBtn = document.querySelector('.close');
const categoryList = document.getElementById('categoryList');

// Event Listeners
getJokeBtn.addEventListener('click', fetchJoke);
toggleCategoryBtn.addEventListener('click', openCategoryModal);
copyJokeBtn.addEventListener('click', copyToClipboard);
closeBtn.addEventListener('click', closeCategoryModal);
window.addEventListener('click', (e) => {
    if (e.target === categoryModal) {
        closeCategoryModal();
    }
});

// Initialize category buttons
function initializeCategoryButtons() {
    categoryList.innerHTML = '';
    
    // Add 'Random' option
    const randomBtn = document.createElement('button');
    randomBtn.className = 'category-btn' + (selectedCategory === 'random' ? ' active' : '');
    randomBtn.textContent = '🎲 Random';
    randomBtn.addEventListener('click', () => selectCategory('random'));
    categoryList.appendChild(randomBtn);

    // Add other categories
    categories.forEach(category => {
        const btn = document.createElement('button');
        btn.className = 'category-btn' + (selectedCategory === category ? ' active' : '');
        const icons = {
            'general': '😂',
            'programming': '💻',
            'knock-knock': '🚪'
        };
        btn.textContent = `${icons[category]} ${category.charAt(0).toUpperCase() + category.slice(1)}`;
        btn.addEventListener('click', () => selectCategory(category));
        categoryList.appendChild(btn);
    });
}

// Fetch Joke from API
async function fetchJoke() {
    getJokeBtn.classList.add('loading');
    getJokeBtn.disabled = true;
    jokeTextEl.textContent = '⏳ Loading...';
    jokeSetupEl.style.display = 'none';
    jokeDeliveryEl.style.display = 'none';

    try {
        let url;
        if (selectedCategory === 'random') {
            // Get random joke from any category
            const randomCat = categories[Math.floor(Math.random() * categories.length)];
            url = `${API_URL}/jokes/${randomCat}/random`;
        } else {
            url = `${API_URL}/jokes/${selectedCategory}/random`;
        }

        const response = await fetch(url);
        if (!response.ok) throw new Error('Failed to fetch joke');
        
        const data = await response.json();
        currentJoke = data[0] || data;
        
        displayJoke();
        jokeCount++;
        jokeCountEl.textContent = jokeCount;
    } catch (error) {
        console.error('Error:', error);
        jokeTextEl.textContent = '😅 Oops! Could not load a joke. Please try again!';
    } finally {
        getJokeBtn.classList.remove('loading');
        getJokeBtn.disabled = false;
    }
}

// Display Joke
function displayJoke() {
    // Set joke type
    const typeMap = {
        'general': '😂 General',
        'programming': '💻 Programming',
        'knock-knock': '🚪 Knock-Knock'
    };
    jokeTypeEl.textContent = typeMap[currentJoke.type] || '🎭 ' + currentJoke.type;

    // Check if it's a setup/delivery joke or single line joke
    if (currentJoke.setup && currentJoke.delivery) {
        jokeSetupEl.textContent = currentJoke.setup;
        jokeDeliveryEl.textContent = currentJoke.delivery;
        jokeTextEl.style.display = 'none';
        jokeSetupEl.style.display = 'block';
        jokeDeliveryEl.style.display = 'block';
    } else {
        jokeTextEl.textContent = currentJoke.joke || 'No joke available';
        jokeTextEl.style.display = 'block';
        jokeSetupEl.style.display = 'none';
        jokeDeliveryEl.style.display = 'none';
    }
}

// Copy Joke to Clipboard
function copyToClipboard() {
    let jokeText = '';
    if (currentJoke.setup && currentJoke.delivery) {
        jokeText = `${currentJoke.setup}\n\n${currentJoke.delivery}`;
    } else {
        jokeText = currentJoke.joke || 'No joke to copy';
    }

    navigator.clipboard.writeText(jokeText).then(() => {
        const originalText = copyJokeBtn.textContent;
        copyJokeBtn.textContent = '✅ Copied!';
        setTimeout(() => {
            copyJokeBtn.textContent = originalText;
        }, 2000);
    }).catch(() => {
        alert('Failed to copy!');
    });
}

// Category Management
function openCategoryModal() {
    categoryModal.style.display = 'flex';
    categoryModal.style.alignItems = 'center';
    categoryModal.style.justifyContent = 'center';
    initializeCategoryButtons();
}

function closeCategoryModal() {
    categoryModal.style.display = 'none';
}

function selectCategory(category) {
    selectedCategory = category;
    currentCategoryEl.textContent = category.charAt(0).toUpperCase() + category.slice(1);
    initializeCategoryButtons();
    closeCategoryModal();
    fetchJoke();
}

// Load first joke on page load
window.addEventListener('load', () => {
    jokeTypeEl.textContent = '🎭 Ready!';
});
