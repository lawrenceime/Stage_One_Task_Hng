
function updateCurrentDay() {
    
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

 
    const currentDate = new Date();

    
    const dayIndex = currentDate.getDay();

    const currentDay = daysOfWeek[dayIndex];

    const currentDayElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');

 
    currentDayElement.textContent = currentDay;
}


function updateCurrentTime() {

    const currentDate = new Date();

   
    const formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }) + ' UTC';

    
    const currentUTCTimeElement = document.querySelector('[data-testid="currentUTCTime"]');

   
    currentUTCTimeElement.textContent = formattedTime;
}

updateCurrentDay();
updateCurrentTime();


setInterval(updateCurrentTime, 1000);

