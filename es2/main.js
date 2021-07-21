//Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di invitati.

var j = ["Paul", "Trump", "Rossi", "Viali"];

var z = ["Marco", "Vlad", "Valentino", "Joe"];

for (var i = 0; i < 4; i++) {
  var k = Math.floor(Math.random() * j.length);

  var n = Math.floor(Math.random() * z.length);
  document.write(j[k]);
  document.write(z[n]);
  console.log(j[k] + " " + z[n]);
}
