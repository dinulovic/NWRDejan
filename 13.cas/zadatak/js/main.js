//Nizovi i objekti

let prodavnica = [{
    ime: 'roda',
    adresa: '9 maj',
    artikli: [{
        ime: 'tapete', 
        kolicina: 200,
        dimenzija: {
            x: 0.5,
            y: 10,
            jedinica: 'm'
        },
        boje: ['zuta', 'plava', 'pink']
    }]
}];

let ime = prodavnica[0].artikli[0].ime;
let dimenzije = prodavnica[0].artikli[0].dimenzija;
let jedinice = prodavnica[0].artikli[0].dimenzija.jedinica;
let boja = prodavnica[0].artikli[0].boje[1];

document.write(`
    Naziv proizvoda: ${ime}
    <br>Dimezije: ${dimenzije.x}${jedinice} x ${dimenzije.y}${jedinice}
    <br>Boja: ${boja}

`);