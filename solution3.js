// Q3: Mirror Corridor

function isPalindrome(n) {
  let str = n.toString();
  let reversed = str.split("").reverse().join("");
  return str === reversed;
}

let N = parseInt(prompt("Enter N:"));
let K = parseInt(prompt("Enter K:"));

let result = -1;

for (let X = 0; X <= 100000; X++) {
  let val = N + X;
  if (isPalindrome(val) && val % K === 0) {
    result = X;
    break;
  }
}

alert(result);
