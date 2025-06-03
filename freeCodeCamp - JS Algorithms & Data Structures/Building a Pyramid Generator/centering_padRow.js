function padRow(rowNumber, rowCount, character = "#") {
  const spaces = " ".repeat(rowCount - rowNumber);
  const symbols = character.repeat(2 * rowNumber - 1);
  return spaces + symbols + spaces;
}
