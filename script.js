// Get the countdown element
const countdownElement = document.getElementById('countdown');

// Retrieve the stored target time from localStorage, or set a default one
let targetTime = localStorage.getItem('targetTime');
if (!targetTime) {
    targetTime = new Date();
    targetTime.setHours(targetTime.getHours() + 1); // Default to 1 hour from now
    localStorage.setItem('targetTime', targetTime);
}

// Function to update the countdown
function updateCountdown() {
    const now = new Date();
    const timeLeft = new Date(targetTime) - now;

    if (timeLeft <= 0) {
        countdownElement.innerHTML = 'Live Stream Started!';
    } else {
        const hours = Math.floor(timeLeft / 3600000);
        const minutes = Math.floor((timeLeft % 3600000) / 60000);
        const seconds = Math.floor((timeLeft % 60000) / 1000);
        countdownElement.innerHTML = `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
}

// Update the countdown every second
setInterval(updateCountdown, 1000);

// Admin password validation
function verifyPassword() {
    const passwordInput = document.getElementById('password-input');
    const password = passwordInput.value;

    if (password === '2143') {
        showAdminPanel();
    } else {
        alert('Incorrect password.');
    }
}

// Show the password prompt
function showPasswordPrompt() {
    document.getElementById('password-prompt').classList.remove('hidden');
}

// Hide the password prompt
function hidePasswordPrompt() {
    document.getElementById('password-prompt').classList.add('hidden');
}

// Show the admin panel
function showAdminPanel() {
    hidePasswordPrompt();
    document.getElementById('admin-panel').classList.remove('hidden');
}

// Hide the admin panel
function hideAdminPanel() {
    document.getElementById('admin-panel').classList.add('hidden');
}

// Set the target time from the admin input
function setTargetTime() {
    const targetTimeInput = document.getElementById('target-time-input').value;
    if (targetTimeInput) {
        targetTime = new Date(targetTimeInput);
        localStorage.setItem('targetTime', targetTime);
        alert('Target time has been set.');
        hideAdminPanel();
    } else {
        alert('Please select a valid target time.');
    }
}

// Show the admin panel when the button is clicked
document.getElementById('admin-button').addEventListener('click', showPasswordPrompt);
