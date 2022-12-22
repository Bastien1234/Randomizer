// Randomize
const h1 = document.getElementById('number');

setInterval(() => {
    // Get random number
    const n = Math.floor(Math.random() * 99);

    // Set random variable
    h1.innerHTML = n;
}, 2000)