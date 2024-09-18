fetch('https://api.aladhan.com/v1/calendarByCity?city=Riyadh&country=Saudi%20Arabia&method=2&month=9&year=2024')
.then(response => response.json())
.then(data => {
    const todayData = data.data[0]; 
    const hijriDate = todayData.date.hijri.date;
    const gregorianDate = todayData.date.gregorian.date;
    const prayers = todayData.timings;

    window.hijriDate = hijriDate;
    window.gregorianDate = gregorianDate;
    window.prayers = prayers;

    
    updatePrayerTimes();
});

function updatePrayerTimes() {
const prayerList = document.getElementById('prayer-times');
prayerList.innerHTML = '';
for (const [prayer, time] of Object.entries(window.prayers)) {
    const listItem = document.createElement('li');
    listItem.textContent = `${prayer}: ${time}`;
    prayerList.appendChild(listItem);
}
}


function showHijri() {
document.getElementById('date').textContent = `Hijri date ${window.hijriDate}`;
}


function showGregorian() {
document.getElementById('date').textContent = `Gregorian date ${window.gregorianDate}`;
}