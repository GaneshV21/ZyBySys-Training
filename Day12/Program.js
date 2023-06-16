var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var avg = 0,
  sum = 0;
for (let i = 0; i < a.length; i++) {
  sum = sum + a[i];
}
console.log("Sum =", sum);
console.log("Average =", sum / a.length);

var greater = a[0];
var j = 0;
while (j < a.length) {
  if (a[j] > greater) {
    greater = a[j];
  }
  j++;
}
console.log("greater number is", greater);

var Name = "Ganesh";
var name1 = "";
for (let k = Name.length - 1; k >= 0; k--) {
  name1 = name1 + Name[k];
}
console.log("Reverse of String is", name1);
