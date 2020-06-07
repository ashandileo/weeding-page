const countDate = new Date('Jun 10, 2020 00:00:00').getTime();

const timeToEvent = () => {
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const d = Math.floor(gap / day);
    const h = Math.floor((gap % day) / hour);
    const m = Math.floor((gap % hour) / minute);
    const s = Math.floor((gap % minute) / second);
    
    document.getElementById('day').innerText = d;
    document.getElementById('hour').innerText = h;
    document.getElementById('minute').innerText = m;
    document.getElementById('second').innerText = s;
}

setInterval(() => {
    timeToEvent();
}, 1000);

const muteSound = document.querySelector('.mute-sound');
const unMuteSound = document.querySelector('.unmute-sound');

muteSound.addEventListener('click', () => {
    muteSound.classList.replace('d-block', 'd-none');
    unMuteSound.classList.replace('d-none', 'd-block');
    document.getElementById('audio').pause();
});

unMuteSound.addEventListener('click', () => {
    unMuteSound.classList.replace('d-block', 'd-none');
    muteSound.classList.replace('d-none', 'd-block');
    document.getElementById('audio').play();
});