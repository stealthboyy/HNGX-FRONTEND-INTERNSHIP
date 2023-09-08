const utcTime = document.querySelector('[data-testid="currentUTCTime"]');

// days of the week with index (0 for Sunday, 1 for Monday, and so on).
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

updateDayOfTheWeek = () => {
    const currentDate = new Date(); 
    const dayOfWeek = daysOfWeek[currentDate.getUTCDay()];
    const dayOfWeekUpdated = document.querySelector('[data-testid="currentDayOfTheWeek"]');
    dayOfWeekUpdated.textContent = dayOfWeek;
}

function updateUTCTime() {
    const currentDate = new Date();
    const options = { timeZone: "UTC", hour12: true };
    const utcTimeString = currentDate.toLocaleTimeString("en-US", options);
    const utcTimeUpdated = document.querySelector('[data-testid="currentUTCTime"]');
    utcTimeUpdated.textContent = utcTimeString;
}

// Update the UTC time and day of the week every second
setInterval(() => {
    updateUTCTime();
    updateDayOfTheWeek();
}, 1000);

// Example: Update the track
const trackElement = document.querySelector('[data-testid="myTrack"]');
trackElement.textContent = "Frontend"; 