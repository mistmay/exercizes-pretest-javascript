import {
    shop,
} from './constants.js';

let secondBiggerArray = [];
let timer;
let myInterval;

function secondBiggerNumber(array) {
    const onlyUniqueNumbers = [...new Set(array)].filter(item => typeof (item) === 'number');
    if (onlyUniqueNumbers.length < 2) {
        alert('Error: array contains less then 2 unique numbers');
        return 'error';
    } else {
        return onlyUniqueNumbers.sort((a, b) => b - a)[1];
    }
}

export function secondBiggerNumberGeneration(command) {
    const input = document.getElementById('second-number-input');
    const showArray = document.getElementById('show-array');
    const showNumber = document.getElementById('show-second-number');
    switch (command) {
        case 'add':
            secondBiggerArray.push(Number(input.value));
            showArray.innerText += ' ' + input.value;
            showNumber.innerText = '';
            break;
        case 'reset':
            secondBiggerArray.length = 0;
            showArray.innerText = '';
            showNumber.innerText = '';
            break;
        case 'find':
            if (secondBiggerArray.length === 0) {
                alert('Error: The Array is Empty');
            } else {
                const result = secondBiggerNumber(secondBiggerArray);
                if (result === 'error') {
                    return;
                } else {
                    showNumber.innerText = String(result);
                }
            }
            break;
    }
}

function convertObjectFormat(obj) {
    for (let day in obj.availability) {
        if (obj.availability[day] === null) {
            delete obj.availability[day];
        } else {
            obj.availability[day].start = new Date(obj.availability[day].start).getHours();
            obj.availability[day].end = new Date(obj.availability[day].end).getHours();
        }
    }
    return obj;
}

export function showTimeSchedule() {
    const section = document.getElementById('time-schedule');
    const schedule = Object.entries(convertObjectFormat(shop).availability);
    schedule.forEach(element => {
        const paragraph = document.createElement('p');
        paragraph.innerText = element[0] + ':';
        Object.entries(element[1]).forEach(item => {
            paragraph.innerText += ` ${item[0]}: ${item[1]}`;
        });
        section.append(paragraph);
    });
}

export async function getCat() {
    document.querySelectorAll('#cat-container>img').forEach(element => {
        element.remove();
    });
    try {
        const fetchedCat = await fetch('https://api.thecatapi.com/v1/images/search');
        const catJson = await fetchedCat.json();
        const catUrl = catJson[0].url;
        const img = document.createElement('img');
        img.setAttribute('src', catUrl);
        document.getElementById('cat-container').append(img);
    } catch (error) {
        console.log(error);
    }
}

function bomb() {
    const showBomb = document.getElementById('bomb');
    if (timer === 0) {
        showBomb.innerText = 'Boom!!!';
        clearInterval(myInterval);
        document.getElementById('start-countdown').style.display = 'block';
    } else {
        showBomb.innerText = `${timer}`;
        timer--;
    }
}

export function startBomb() {
    document.getElementById('start-countdown').style.display = 'none';
    document.getElementById('bomb').style.display = 'block';
    timer = Math.floor(Math.random() * (11 - 3) + 3);
    bomb();
    myInterval = setInterval(bomb, 1000);
}