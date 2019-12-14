let skola = {};



function create() {
    skola = {
        naziv_skole: "Pavle Ilic Veljko - Radujevac",
        adresa: "Bez broja",
        godina_osnivanja: 1956,
        smerovi: [
            {
                naziv_smera: "Drustveno-jezicki",
                broj_studenta: 57,
                predmeti: ["Srpski jezik", "Istorija", "Geografija", "Fizicko"]
            },
            {
                naziv_smera: "Prirodno-matematicki",
                broj_studenta: 68,
                predmeti: ["Fizika", "Matematika", "Hemija", "Fizicko"]
            },
            {
                naziv_smera: "Opsti",
                broj_studenta: 35,
                predmeti: ["Informatika", "Matematika", "Srpski jezik", "Fizicko"]
            }
        ]
    }

    console.log(skola);
    
}

function list_all() {

    document.write(`
        <b>Naziv skole:</b>  ${skola.naziv_skole}
        <br><b>Adresa:</b> ${skola.adresa}
        <br><b>Godina Osnivanja:</b> ${skola.godina_osnivanja}
        <br><b>Naziv smera:</b> ${skola.smerovi[1].naziv_smera}
        <br><b>Broj studenata:</b> ${skola.smerovi[1].broj_studenta}
        <br><b>Predmeti:</b> <br>${skola.smerovi[1].predmeti[0]}, <br> ${skola.smerovi[1].predmeti[1]}, <br> ${skola.smerovi[1].predmeti[2]}, <br> ${skola.smerovi[1].predmeti[3]}
    
    `);
}


//Init
create();
list_all();