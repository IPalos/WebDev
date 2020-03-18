// Declaramos un arreglo 
var numeros = [1,2,3,4,5];

// Por cada numero en numeros,
// lo eleva al cuadrado y lo guarda en
// la va guardando en la variable 
// alCuadrado
var alCuadrado = numeros.map(
  function(numero) {
    return numero*numero;
  }
);

// imprime [1,4,9,16,25]
console.log(alCuadrado);

