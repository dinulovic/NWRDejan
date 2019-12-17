let car1 = {
    price: {
        sat: '200',
        dan: '1000',
        nedeljno: '5000'
    },
    model: '',
    type: '',
    engine: ''
}

let car2 = {
    price: {
        sat: '200',
        dan: '1000',
        nedeljno: '5000'
    },
    model: '',
    type: '',
    engine: ''
}

let car3 = {
    price: {
        sat: '200',
        dan: '1000',
        nedeljno: '5000'
    },
    model: '',
    type: '',
    engine: ''
}

let rentacar = [
    car1,
    car2,
    car3
];
 

rentacar[0].model = 'Mercedes';
rentacar[1].model = 'Ford';
rentacar[2].model = 'Yugo';
 
// console.log(rentacar);

// Vezba funkcija

function sabiranje() {
    let a = 5;
    let b = 10;
    let zbir;
    zbir = a + b; 

    console.log(zbir);
    
}

sabiranje();

function deljenje(delilac, deljenik) {
    let rez; 
    rez = delilac / deljenik;

    console.log(rez);
    
}

deljenje(10, 2)