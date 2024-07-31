// Hardcoded start and end dates
const countdownStartDate = new Date('2024-08-01T00:00:00'); // Set the start date here
const countdownEndDate = new Date('2024-08-15T23:59:59'); // Set the end date here

// Save the hardcoded dates to localStorage
function setStoredDates(startDate, endDate) {
    localStorage.setItem('countdownStartDate', startDate.toISOString());
    localStorage.setItem('countdownEndDate', endDate.toISOString());
}

// Retrieve stored dates from localStorage
function getStoredDates() {
    const startDate = localStorage.getItem('countdownStartDate');
    const endDate = localStorage.getItem('countdownEndDate');
    return {
        startDate: startDate ? new Date(startDate) : countdownStartDate,
        endDate: endDate ? new Date(endDate) : countdownEndDate
    };
}

// Initialize countdown dates
function initializeDates() {
    const { startDate, endDate } = getStoredDates();
    const now = new Date();

    if (now >= startDate) {
        countdownEnd = endDate;
        updateCountdown();
    } else {
        countdownEnd = endDate;
        updateCountdown();
    }
}

// Update countdown
function updateCountdown() {
    const countdownElement = document.getElementById('countdown');
    const now = new Date();
    const timeRemaining = countdownEnd - now;

    if (timeRemaining <= 0) {
        countdownElement.innerHTML = 'Offer Expired!';
        localStorage.removeItem('countdownStartDate');
        localStorage.removeItem('countdownEndDate');
        return;
    }

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `${days} : ${hours} : ${minutes} : ${seconds}`;
}

// Initialize countdown interval and dates
let countdownEnd;
setStoredDates(countdownStartDate, countdownEndDate);
setInterval(updateCountdown, 1000);
initializeDates();
