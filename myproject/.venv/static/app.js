function updateClock(cityId, offset) {
    const cityElement = document.getElementById(cityId);
    const hourElement = cityElement.querySelector('.hour');
    const minuteElement = cityElement.querySelector('.minute');
    const secondElement = cityElement.querySelector('.second');

    const currentTime = new Date();
    const utc = currentTime.getTime() + currentTime.getTimezoneOffset() * 60000;
    const localTime = new Date(utc + (3600000 * offset));

   

    //აქ ჩავამტე ხელით + წუთები,წმ,სთ, რადგან ზუსტ დროს ვერ იღებდა უკან იყო

    const hour = localTime.getHours()-0.23
    const hours = hour
    const minute = localTime.getMinutes() +14.7
    const minutes = minute
    const second = localTime.getSeconds()+15
    const seconds = second

    const hourRotation = (360 / 12) * hours + (360 / 12) * (minutes / 60);
    const minuteRotation = (360 / 60) * minutes + (360 / 60) * (seconds / 60);
    const secondRotation = (360 / 60) * seconds;

    hourElement.style.transform = `rotate(${hourRotation}deg)`;
    minuteElement.style.transform = `rotate(${minuteRotation}deg)`;
    secondElement.style.transform = `rotate(${secondRotation}deg)`;
}

function updateAllClocks() {
    updateClock('new-york', -2); // New York (UTC-5)
    updateClock('berlin', 4);   // Berlin (UTC+1)
    updateClock('tokyo', 12);    // Tokyo (UTC+9)
    updateClock('moscow', 6);   // Moscow (UTC+3)
}

// Update clocks every second
setInterval(updateAllClocks, 1000);

// Initial update
updateAllClocks();