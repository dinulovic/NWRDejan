let rezultat = document.getElementById('rezultat');



rezultat.innerHTML = Math.round(generateRandom(10, 5));;

function generateRandom(max, min) {
    return Math.random() * (max-min) + min;
}

