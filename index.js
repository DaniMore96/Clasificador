//Esta forma de resolver la miro interesante porque me fue interesante//
//la forma que trabajar el switch case//
// let nomeHeroe = "Hull";
// let xpHeroe = 1050;

switch (true) {
  case xpHeroe < 1000:
    console.log("El super héroe " + nomeHeroe + " es de XP Hierro.");
    break;
  case xpHeroe >= 1001 && xpHeroe < 2000:
    console.log("El super héroe " + nomeHeroe + " es de XP Bronce.");
    break;
  case xpHeroe >= 2001 && xpHeroe < 5000:
    console.log("El super héroe " + nomeHeroe + " es de XP Plata.");
    break;
  case xpHeroe >= 5001 && xpHeroe < 8000:
    console.log("El super héroe " + nomeHeroe + " es de XP Platino Diamante.");
    break;
  case xpHeroe >= 8001 && xpHeroe < 9000:
    console.log("El super héroe " + nomeHeroe + " es de XP Ascendente.");
    break;
  case xpHeroe >= 9001 && xpHeroe < 10000:
    console.log("El super héroe " + nomeHeroe + " es de XP Inmortal.");
    break;
  case xpHeroe >= 10001:
    console.log("El super héroe " + nomeHeroe + " es de XP Radiante.");
    break;
  default:
    console.log("El super héroe " + nomeHeroe + " no tiene un rango de XP definido.");
}

//Outra forma de resolver o exercicio
// let nomeHeroe = "Hull";
// let xpHeroe = 100;

if (xpHeroe < 1000) {
  console.log("El super héroe " + nomeHeroe + " es de XP Hierro.");
} else if (xpHeroe >= 1001 && xpHeroe < 2000) {
  console.log("El super héroe " + nomeHeroe + " es de XP Bronce.");
} else if (xpHeroe >= 2001 && xpHeroe < 5000) {
  console.log("El super héroe " + nomeHeroe + " es de XP Plata.");
} else if (xpHeroe >= 5001 && xpHeroe < 8000) {
  console.log("El super héroe " + nomeHeroe + " es de XP Platino Diamante.");
} else if (xpHeroe >= 8001 && xpHeroe < 9000) {
  console.log("El super héroe " + nomeHeroe + " es de XP Ascendente.");
} else if (xpHeroe >= 9001 && xpHeroe < 10000) {
  console.log("El super héroe " + nomeHeroe + " es de XP Inmortal.");
} else if (xpHeroe >= 10001) {
  console.log("El super héroe " + nomeHeroe + " es de XP Radiante.");
} else {
  console.log("El super héroe " + nomeHeroe + " no tiene un rango de XP definido.");
}