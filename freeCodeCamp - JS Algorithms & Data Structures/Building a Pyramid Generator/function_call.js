const character = "#";
const count = 8;
const rows = [];

function padRow(rowNumber, rowCount) {
  return character.repeat(rowNumber + 1);
}

for (let i = 0; i < count; i = i + 1) {
  rows.push(padRow(i, count));
}

let result = "";

for (const row of rows) {
  result = result + row + "\n";
}

console.log(result);
