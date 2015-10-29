/* --------- new one --------- */
for (var a = "#"; a.length < 8; a += "#")
  console.log(a);

/* --------- new one --------- */
for (var b = 1; b <= 100; b++) {
  var output = "";
  if (b % 3 == 0)
    output += "Fizz";
  if (b % 5 == 0)
    output += "Buzz";
  console.log(output || b);
}

/* --------- new one --------- */
var size = 8;
var board = "";

for (var x = 0; x < size; x++) {
  for (var y = 0; y < size; y++) {
    if ((x + y) % 2 == 0)
      board += " ";
    else
      board += "#";
  }
  board += "\n";
}
console.log(board);
