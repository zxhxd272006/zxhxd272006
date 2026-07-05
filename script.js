const TIMEZONES = [
    'America/New_York',
    'Europe/London',
    'Europe/Paris',
    'Asia/Tokyo',
    'Asia/Shanghai',
    'Asia/Hong_Kong',
    'Asia/Dubai',
    'Asia/Kolkata',
    'Australia/Sydney',
    'Pacific/Auckland',
    'America/Los_Angeles',
    'America/Chicago',
    'America/Denver',
    'America/Anchorage',
    'Pacific/Honolulu',
    'America/Toronto',
    'America/Mexico_City',
    'America/Sao_Paulo',
    'Europe/Berlin',
    'Europe/Rome',
    'Europe/Madrid',
    'Europe/Moscow',
    'Africa/Cairo',
    'Africa/Johannesburg',
    'Asia/Bangkok',
    'Asia/Singapore',
    'Asia/Seoul',
    'Asia/Manila'
];

let selectedTimezones = ['America/New_York', 'Europe/London', 'Asia/Tokyo'];
let use24HourFormat = true;

function updateClocks() {
    const clockGrid = document.getElementById('clockGrid');
    clockGrid.innerHTML = '';

    selectedTimezones.forEach((timezone, index) => {
        const time = getTimeInTimezone(timezone);
        const card = createClockCard(timezone, time, index);
        clockGrid.appendChild(card);
    });
}

function getTimeInTimezone(timezone) {
    const now = new Date();
    const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: timezone,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: !use24HourFormat
    });
    
    const dateFormatter = new Intl.DateTimeFormat('en-US', {
        timeZone: timezone,
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return {
        time: formatter.format(now),
        date: dateFormatter.format(now)
    };
}

function createClockCard(timezone, timeData, index) {
    const card = document.createElement('div');
    card.className = 'clock-card';
    
    const tzName = timezone.split('/').pop().replace(/_/g, ' ');
    const country = timezone.split('/')[0].replace(/_/g, ' ');
    
    card.innerHTML = `
        <button class="remove-btn" onclick="removeTimezone(${index})">×</button>
        <div class="timezone-name">${tzName}</div>
        <div style="font-size: 0.85em; color: #999; margin-bottom: 10px;">${country}</div>
        <div class="time-display">${timeData.time}</div>
        <div class="date-display">${timeData.date}</div>
    `;
    
    return card;
}

function removeTimezone(index) {
    selectedTimezones.splice(index, 1);
    if (selectedTimezones.length === 0) {
        selectedTimezones = ['America/New_York'];
    }
    updateClocks();
}

function showAddTimezoneModal() {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.display = 'flex';
    modal.style.alignItems = 'center';
    modal.style.justifyContent = 'center';

    let selectOptions = '';
    TIMEZONES.forEach(tz => {
        if (!selectedTimezones.includes(tz)) {
            selectOptions += `<option value="${tz}">${tz}</option>`;
        }
    });

    modal.innerHTML = `
        <div class="modal-content">
            <h2>Add Timezone</h2>
            <select id="timezoneSelect">
                ${selectOptions}
            </select>
            <div class="modal-buttons">
                <button class="btn-confirm" onclick="addNewTimezone()">Add</button>
                <button class="btn-cancel" onclick="closeModal()">Cancel</button>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
    document.getElementById('timezoneSelect').focus();
}

function addNewTimezone() {
    const select = document.getElementById('timezoneSelect');
    const timezone = select.value;
    if (timezone && !selectedTimezones.includes(timezone)) {
        selectedTimezones.push(timezone);
        closeModal();
        updateClocks();
    }
}

function closeModal() {
    const modal = document.querySelector('.modal');
    if (modal) {
        modal.remove();
    }
}

function toggleTimeFormat() {
    use24HourFormat = !use24HourFormat;
    updateClocks();
}

// Event Listeners
document.getElementById('addTimezone').addEventListener('click', showAddTimezoneModal);
document.getElementById('toggleFormat').addEventListener('click', toggleTimeFormat);

// Initial setup
updateClocks();

// Update clocks every second
setInterval(updateClocks, 1000);

// Close modal when clicking outside
document.addEventListener('click', function(event) {
    const modal = document.querySelector('.modal');
    if (modal && event.target === modal) {
        closeModal();
    }
});