let str = 'lorem ipsum dolor amin.';

// console.log(str.indexOf('ipsum'));

let strUnderscore = 'lorem_ipsum_dolor_amin.';

let strBlanko = strUnderscore.replace(/_/gi," ");

let str1 = document.getElementById('str1');
let str2 = document.getElementById('str2');

str1.innerHTML = strUnderscore;
str2.innerHTML = strBlanko;                       

//Extraction words

let voce = 'Banana, jabuka, kruska, jagoda';
let searchTerm = 'kruska';

let startIndex = voce.indexOf(searchTerm);
let endIndex = searchTerm.length + startIndex;

let resultat = voce.slice(startIndex, endIndex)

console.log(resultat);



