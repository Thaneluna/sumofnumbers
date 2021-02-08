const list = [1,
  2,
  3,
  4,
];
function sumFor() {
  let total = 0;
  for (let i = 0; i < list.length; i++) {
    total += list[i];
  }
  return total;
}
function sumWhile() {
  let total = 0;
  let i = 0;
  while (i < list.length) {
    total += list[i];
    i++;
  }
  return total;
}
function sumRecursion(arr, n) {
  if (n < 1) return 0;
  return (sumRecursion(arr, n - 1) + arr[n - 1]);
}
function sumTheSimpleWay(arr) {
  return _.reduce(arr, (total, i) => total + i);
}
console.log(sumWhile());
console.log(sumFor());
console.log(sumRecursion(list, list.length));
console.log(sumTheSimpleWay(list));
