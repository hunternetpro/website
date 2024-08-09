function updateTime() {
    const clocks = [
        { id: 'time1', timezone: document.getElementById('timezone1').value, name: document.getElementById('name1').value },
        { id: 'time2', timezone: document.getElementById('timezone2').value, name: document.getElementById('name2').value },
        { id: 'time3', timezone: document.getElementById('timezone3').value, name: document.getElementById('name3').value },
        { id: 'time4', timezone: document.getElementById('timezone4').value, name: document.getElementById('name4').value }
    ];

    clocks.forEach(clock => {
        const now = new Date();
        const utcTime = now.getTime() + now.getTimezoneOffset() * 60000;
        const offset = parseInt(clock.timezone) * 3600000;
        const localTime = new Date(utcTime + offset);

        document.getElementById(clock.id).innerText = localTime.toLocaleTimeString();
        const clockElement = document.getElementById(clock.id).parentElement;
        clockElement.querySelector('input.clock-name').value = clock.name || 'Clock Name';
    });
}

document.querySelectorAll('select').forEach(select => {
    select.addEventListener('change', updateTime);
});

document.querySelectorAll('input.clock-name').forEach(input => {
    input.addEventListener('input', updateTime);
});

setInterval(updateTime, 1000);
updateTime();
