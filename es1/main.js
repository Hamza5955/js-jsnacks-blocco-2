//Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo
var j = parseInt(prompt("inserisci un numero"));

if (j % 2 == 0) {
  console.log(j);
} else {
  j = j + 1;
  console.log(j);
}
