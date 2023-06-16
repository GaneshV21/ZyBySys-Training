let first = "a";
let second = "efg";
// let fir = String(first).split("");
// let sec = String(second).split("");
let length = first.length < second.length ? second.length : first.length;
console.log(length);
let main = [];

for (var i = 0; i < length; i++) {
  if (first[i] != undefined) main.push(first[i]);
  if (second[i] != undefined) main.push(second[i]);
}
console.log(main);


let a = 25;
let b = [];
while (a > 0) {
  let c = a % 2;
  b.push(c);
  a = Math.floor(a / 2);
}
let d = 0;
let e = [];
for (var i = b.length - 1; i >= 0; i--) {
  e[d] = b[i];
  d++;
}
console.log(e);

// 1.https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV
// 2.https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa
// 3.https://www.frontendmentor.io/challenges/suite-landing-page-tj_eaU-Ra
// 4.https://www.frontendmentor.io/challenges/meet-landing-page-rbTDS6OUR
// 5.https://www.frontendmentor.io/challenges/manage-landing-page-SLXqC6P5
