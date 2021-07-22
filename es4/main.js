var k = [1, 2, 3, 4, 5];
var j = [1, 2, 3];
/*
for (var i = 0; i < j.length; i++) {
  if (j.length < k.length) {
    var add_number = Math.floor(Math.random() * 5);
    j.push(add_number);
  }
}
console.log(k);
console.log(j);*/
while (k.length != j.length) {
  if (k.length < j.length) {
    k.push("1");
  } else if (j.length < k.length) {
    j.push("1");
  }
}
console.log("arrey 1: " + k);
console.log("arrey 1: " + j);
