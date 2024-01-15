// function jubilacion ( nacimiento, nombre ) {
//     var edad = 2023 - nacimiento;
//     var anyoJubilación = 65 - edad;

//     return 'A ' + nombre  + ' le faltan ' + anyoJubilación + ' años para jubilarse';

// }


// var nombre = 'Jaime';
// var nacimiento = 1985;


// console.log(jubilacion(nacimiento, nombre));


// function prueba() {
//     console.log('Mensaje en la función prueba()');
// }


// var prueba2 = function () {
//     console.log('Mensaje en la función prueba2()');
// }

// // prueba();
// prueba2();


// Valores por defecto
// var sumar = function (a = 1, b = 2, c = 3) {
//     return a + b + c;
// }

// console.log(sumar(10, 4));
// console.log(sumar(10, 4, 5));
// console.log(sumar());

// Plantillas de cadenas (template string)

// var nombre = 'Pablo';
// console.log('El nobre es ' + nombre);

// console.log(`El nobre es ${nombre}`);

// console.log( `La suma es ${5 + 4}`);

function score(nobre, positivas, negativas) {
    var total = positivas + negativas;
    var porcentage = (positivas * 100) / total;
    var score;


    switch (true) {
        case (porcentage > 90):
            score = 'A';
            break;
        case (porcentage > 70 && porcentage < 89):
            score = 'B';
            break;
        case (porcentage > 45 && porcentage < 69):
            score = 'C';
            break;
        case (porcentage < 45):
            score = 'D';
            break;
    }

    return `porcentage de ${nobre}: ${porcentage} y score: ${score}`;
}

console.log(score('Jaime', 98, 3));