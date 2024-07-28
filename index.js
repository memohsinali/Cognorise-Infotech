


const Inauguration = document.querySelector(".inauguration");
Inauguration.innerHTML = "26 July 2024 4:53 AM"; // ISO 8601 format

// Parse the date string to a Date object
const dateString = Inauguration.innerHTML;
const endDate = new Date(Inauguration.innerHTML);
const nowDate = new Date();

let dif = (endDate - nowDate) / 1000;

//calculating days


function clock() {

    const dateString = Inauguration.innerHTML;
    const endDate = new Date(Inauguration.innerHTML);
    const nowDate = new Date();

    let dif = (endDate - nowDate) / 1000;

    const daysV = Math.floor(dif / 86400);  // days
    const hoursV = Math.floor((dif / 3600) % 24);  // hours
    const minV = Math.floor((dif / 60) % 60);  // min
    const secV = Math.floor(dif % 60);  // sec

    if (secV == 0) {
        return;
    }

    const d = document.querySelector(".days input");
    d.value = daysV;

    const h = document.querySelector(".hours input");
    h.value = hoursV;

    const m = document.querySelector(".minutes input");
    m.value = minV;

    const s = document.querySelector(".seconds input");
    s.value = secV;

}


setInterval(function () {
    const dateString = Inauguration.innerHTML;
    const endDate = new Date(Inauguration.innerHTML);
    const nowDate = new Date();

    let dif = (endDate - nowDate) / 1000;

    const daysV = Math.floor(dif / 86400);  // days
    const hoursV = Math.floor((dif / 3600) % 24);  // hours
    const minV = Math.floor((dif / 60) % 60);  // min
    const secV = Math.floor(dif % 60);  // sec

    if (secV < 0) {
        return;
    }

    const d = document.querySelector(".days input");
    d.value = daysV;

    const h = document.querySelector(".hours input");
    h.value = hoursV;

    const m = document.querySelector(".minutes input");
    m.value = minV;

    const s = document.querySelector(".seconds input");
    s.value = secV;
}, 1000);