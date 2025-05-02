let person = "Maria";
let team = "Flamengo";

switch (team) {
    case "Flamengo":
        console.log(person + " é flamenguista.");
        break;
    case "Vasco":
        console.log(person + " é vascaíno.");
        break;
    case "Botafogo":
        console.log(person + " é botafoguense.");
        break;
    case "Fluminense":
        console.log(person + " é tricolor.");
        break;
    default:
        console.log(person + " não torce para nenhum time.");
        break;
}