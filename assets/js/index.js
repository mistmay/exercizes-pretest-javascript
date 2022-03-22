import {
    secondBiggerNumberGeneration,
    showTimeSchedule,
    getCat,
    startBomb
} from './functions.js';

document.getElementById('hamburger').addEventListener('click', () => {
    document.querySelector('aside').classList.toggle('visible-aside');
    document.querySelector('main').classList.toggle('margin-top-toogle');
});
window.addEventListener('resize', () => {
    if (window.innerWidth >= 768 && document.querySelector('aside').classList.contains('visible-aside')) {
        document.querySelector('aside').classList.toggle('visible-aside');
        document.querySelector('main').classList.toggle('margin-top-toogle');
    }
});
document.getElementById('add-to-array').addEventListener('click', () => secondBiggerNumberGeneration('add'));
document.getElementById('reset-array').addEventListener('click', () => secondBiggerNumberGeneration('reset'));
document.getElementById('find-second-number').addEventListener('click', () => secondBiggerNumberGeneration('find'));
document.getElementById('get-cat').addEventListener('click', () => getCat());
document.getElementById('start-countdown').addEventListener('click', () => startBomb());

window.addEventListener('DOMContentLoaded', () => showTimeSchedule());