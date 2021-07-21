//Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari

var j = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
k = 0;

for (let i = 0; i < j.length; i++) {
  const element = j[i];
  if (element % 2 != 0) {
    k += element;
  }
}
console.log(k);
