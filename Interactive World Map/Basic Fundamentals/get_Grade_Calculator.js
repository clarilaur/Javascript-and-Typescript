function getGrade(score) {
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  if (score >= 60) return "D";
  return "F";
}
let studentScore = 85;
console.log(`Score: ${studentScore} - Grade: ${getGrade(studentScore)}`);
console.log(`Score: 92 - Grade: ${getGrade(92)}`);
