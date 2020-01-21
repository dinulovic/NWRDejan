//Strings

let string = "Deki_pro";
let number = "10";
let myName = "Jeff";

if(string.length == myName.length) {
    console.log('Vrednosti su jednaki');
    
} else {
    console.log('Vrednosti nisu jednaki');
    
}


//Number

if(number == 10) {
    console.log('Iste vrednosti');
    
} else {
    console.log('Nisu');
    
}

//Array

let niz = [1, 2, 3, 4];


if(niz.length > 5) {
    console.log('Niz je duzi od 5', niz.length);
} else {
    console.log('Ne sadrzi', niz.length);
}


//Object

let obj = {
    number: 10
}

if(obj.number > 15) {
    console.log('Broj je veci od 15');
} else {
    console.log('Manji');
    
}
