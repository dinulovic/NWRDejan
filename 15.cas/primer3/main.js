let currentDay = new Date().getDay();
let day = "";
switch (currentDay) {
    case 0:
    day = "Nedelja";
        break;

    case 1:
    day = "Ponedeljak";
        break;

    case 2:
    day = "Utorak";
        break;

    case 3:
    day = "Sreda";
        break;

    case 4:
    day = "Cetvrtak";
        break;

    case 5:
    day = "Petak";
        break;

    case 6:
    day = "Subota";
        break;

    default:
        day = "Nije pronadjeno nista;"
}

console.log(day);
