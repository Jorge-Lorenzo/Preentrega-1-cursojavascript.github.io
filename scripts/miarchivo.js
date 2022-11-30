//ALGORITMO CONDICIONAL. 
let nombre= prompt("Bienvenido, por favor ingrese nombre");
let apellido= prompt("Ingrese su apellido");

if (nombre === "") {
    alert("Necesitas colocar un nombre");
} else if (apellido === "") {
    alert("Necesitas colocar un apellido");
} else {
    alert("Hola " + nombre + " " + apellido + " gracias por elegirnos");
}



//CICLO DE ALGORITMO
let tipoDivisa= prompt(`Elija una divisa para operar
1:USDT
2:Bitcoint
3:NFT
`);

switch (tipoDivisa) {
    case "1":
        alert ("Has elegido USDT")
        break;
    case "2":
        alert ("Has elegido Bitcoint")
        break;
    case "3":
        alert ("Has elegido NFT")
        break;    

    default:
        alert("Ninguna de las anteriores")
        break;
}



//SIMULADOR INTERACTIVO: COTIZADOR DE DOLAR Y EURO.
//Variables
let pesos= parseInt(prompt("Bienvenido al Cotizador de divisas. Por favor ingrese un monto en pesos sin , ni ."));
let cotDolar= 311;
let cotEuro= 306;

//Funciones 
const conversionDolar= function (pesos, cotDolar){
    return pesos / cotDolar;
}

const conversionEuro= function (pesos, cotEuro){
    return pesos / cotEuro;
}

let resultado1= conversionDolar(pesos, cotDolar);
let resultado2= conversionEuro(pesos, cotEuro);

alert("Tienes disponible " + resultado1 + " " + "Dolares para la compra");
alert("Tienes disponible " + resultado2 + " " + "Euros para la compra");