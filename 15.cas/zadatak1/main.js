// Zadatak 1

// Napisati funkciju od 1 - 50
let broj = randomNumber();

function randomNumber () {
    return parseInt(Math.random() * 50); 
}



if(broj > 20) {
    document.write('Dobijeni broj je ', broj );
    document.write('<br>Broj je veci od 20');
    document.write('<br>Kada se pomnozi sa brojem 5, dobijeni broje je: ', broj * 5);
} else if(broj < 10) {
    document.write('Dobijeni broj je ', broj );
    document.write('<br>Broj je manji od 20');
    document.write('<br>Kada se pomnozi sa brojem 5, dobijeni broj je: ', broj * 5);
} else {
    document.write('nesto');
}
