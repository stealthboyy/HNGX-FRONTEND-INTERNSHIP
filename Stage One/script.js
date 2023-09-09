const utcTime = document.querySelector('[data-testid="currentUTCTime"]');

// days of the week with index (0 for Sunday, 1 for Monday, and so on).
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const myTrackUpdated = document.querySelector('[data-testid="myTrack"]');
const myUsernameUpdated = document.querySelector('[data-testid="slackUserName"]');
const myPortfolio = document.querySelector('[data-testid=“githubURL”]');
const myProfilePicture = document.querySelector('[data-testid="slackDisplayImage"]');
const utcTimeUpdated = document.querySelector('[data-testid="currentUTCTime"]');

updateDayOfTheWeek = () => {
    const currentDate = new Date(); 
    const dayOfWeek = daysOfWeek[currentDate.getUTCDay()];
    const dayOfWeekUpdated = document.querySelector('[data-testid="currentDayOfTheWeek"]');
    dayOfWeekUpdated.textContent = dayOfWeek;
}

function updateUTCTime() {
    // const currentDate = new Date();
    // const options = { timeZone: "UTC", hour12: true };
    // const utcTimeString = currentDate.toLocaleTimeString("en-US", options);
    const currentTimeInMilliseconds = Date.now();
    utcTimeUpdated.textContent = currentTimeInMilliseconds.toString();
}

// Update the UTC time and day of the week every second


updatePersonalData = () => {
myTrackUpdated.textContent = "Frontend"; 
myUsernameUpdated.textContent = "Olajide-Oke Oluwapelumi"

// Github Link
myPortfolio.setAttribute('href', 'https://github.com/stealthboyy/zuri-intern');
myPortfolio.textContent = "My Github Profile"

// Display Picture
myProfilePicture.setAttribute('src', './assets/pictures/slackDisplayPicture.png');
myProfilePicture.setAttribute('alt', 'Olajide-Oke Oluwapelumi');
}



updatePersonalData();

setInterval(() => {
    updateUTCTime();
    updateDayOfTheWeek();
}, 1000);

const currentTimeInMilliseconds = Date.now();
console.log(currentTimeInMilliseconds);