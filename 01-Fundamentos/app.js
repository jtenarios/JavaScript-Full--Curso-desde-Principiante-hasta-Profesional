//

var pesoLuis = 72;
var alturaLuis = 1.72;

var pesoCarlos = 89;
var alturaCarlos = 1.75;

var imcLuis = pesoLuis / Math.pow(alturaLuis, 2);
var imcCarlos = pesoCarlos / Math.pow(alturaCarlos, 2);


console.log( 'IMC de Luis: ',  imcLuis);
console.log( 'IMC de Carlos: ',  imcCarlos);
console.log( '¿IMC de Carlos es superior al de Luis?: ',  imcCarlos > imcLuis);