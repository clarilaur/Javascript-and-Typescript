function padRow(rowNumber, rowCount) {
  const padding = " ".repeat(rowCount - rowNumber);
  const content = character.repeat(rowNumber * 2 - 1);
  return padding + content + padding;
}
