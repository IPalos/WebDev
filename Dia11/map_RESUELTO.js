import "./arreglos_Resuelto.js"

var letrasMesesDelAño = mesesDelAño.map(
  function(mes){
    return mes.length;
  }
);

function contarVocales(string) {
  var vocales = ["a", "e", "i", "o", "u"];
  var count = 0;
  var wiu = string.split("").map(function(letra) {
    if (vocales.includes(letra)) {
      count += 1;
    } else {
      return 0;
    }
  });
  return count;
}

console.log(contarVocales("qwoiej"));
