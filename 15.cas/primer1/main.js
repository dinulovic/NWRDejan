//IF / ELSE  Statments

let startValue = 0;


//Math.random
startValue = Math.random() * 100;

let a = parseInt(startValue);

// console.log(a);

// if(a > 50) {
//     console.log('Veci od 50', a);
    
// } else {
//     console.log('Manji vrednost', a);
    
// }


// a > 50 ? console.log('Veci od 50', a) : console.log('Manji od 50', a);


/*
*Else if
*/

if(a > 30 && a < 50) {
    console.log('Imedju 30 i 50', a);
} else if(a >= 50) {
    console.log('Vece od 50', a);
} else {
    console.log('Manje od 30', a);
}

