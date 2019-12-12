//Prazna funkcija
let rez; 
function sabiranje() {
    let a = 4;
    let b = 6;
 
    rez = a + b;
}

sabiranje();
// console.log(rez);


//Prazna funkcija
let rezA; 
function sabiranjeA(a, b) { 
    rezA = a + b;
}

sabiranjeA(10, 4);
// console.log(rezA);

//var
let osoba;

function create() {
    osoba = {
        ime: 'Dejan',
        prezime: 'Dinulovic',
        godina: 1994
    }
}

function print () {
    document.write('Ime: ' + osoba.ime);
    document.write('</br>Prezime: ' + osoba.prezime);
    document.write('</br>Godina: ' + osoba.godina);
}

//Init
create();
print();