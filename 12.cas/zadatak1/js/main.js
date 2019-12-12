// document.write('Hello World');

let broj = 1;

let recenica = "Lorem Ipsum";

let uslov = true;

let niz = [1, 2, 3, 4, 5];

let azbuka = ['A', 'B', "C", 'D', "E"];


niz[0] = 10;

niz.push = 23;

console.log(niz);


let osoba = {
    ime: 'Dejan',
    prezime: 'Dinulovic',
    godina: 23,
    predmet: {
        test: 'Fizicko',
        test2: 'Veliki odmor'
    }
};


let ucionica = [{
        ime: 'Dejan',
        prezime: 'Dinulovic',
        godina: 24
    },
    {
        ime: 'Dejan',
        prezime: 'Dinulovic',
        godina: 24
    },
    {
        ime: 'Dejan',
        prezime: 'Dinulovic',
        godina: 24
    },
    {
        ime: 'Dejan',
        prezime: 'Dinulovic',
        godina: 24
    },
    {
        ime: 'Dejan',
        prezime: 'Dinulovic',
        godina: 24
    },
    [1, 2, 3]
];

// console.log(ucionica);
// console.log(ucionica[5][0]);


document.write('Moje ime je: ' + osoba.ime + '</br>Moje prezime je: ' + osoba.prezime + '</br>Godina: ' + osoba.godina + '</br>Premete koje volim: ' + osoba.predmet.test + ' i ' + osoba.predmet.test2);


let isCorrect = true;
console.log(isCorrect);




// for(let i = 0; i < niz.length; i++) {
//     console.log('Niz vrednost', niz[i]);
// }

// let obj = {};

// let none = null;

// console.log(typeof(broj), broj);

// console.log(typeof(recenica), recenica);

// console.log(typeof(uslov), uslov);

// console.log(typeof(niz), niz[4]);

// console.log(typeof(obj), obj);

// console.log(typeof(none), none);