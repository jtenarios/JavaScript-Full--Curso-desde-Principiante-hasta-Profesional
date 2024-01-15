var pablo = [14, 8, 16];
var maria = [12, 18, 10];

var sumaPablo = 0;
var sumaMaria = 0;

var mediaPablo;
var mediaMaria;

for (i = 0; i < pablo.length; i++) {
    console.log(pablo[i]);
    sumaPablo = sumaPablo + pablo[i];
}

for (i = 0; i < maria.length; i++) {
    sumaMaria = sumaMaria + maria[i];
}

mediaPablo = sumaPablo / pablo.length;
mediaMaria = sumaMaria / maria.length;

console.log('mediaPablo', mediaPablo);
console.log('mediaMaria', mediaMaria);


if (mediaPablo > mediaMaria) {

    console.log('El alumno con el mayor promedio es Pablo');
} else {
    console.log('El alumno con el mayor promedio es Maria');
}

console.log('El alumno con el mayor promedio es ' + (mediaPablo > mediaMaria ? 'Pablo' : 'Maria'));

console.log('Pablo ha aprovado: ' + (mediaPablo > 13 ? true : false));

console.log('Maria ha aprovado: ' + (mediaMaria > 13 ? true : false));