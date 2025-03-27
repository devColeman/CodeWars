function finalGrade (exam, projects) {
    // P: given two integers 
    // R: return a integer
    // E: 100, 12 --> 100, 85, 5 --> 90, 55, 3 --> 75
    // P: use a basic if checks for each grade and exams

if(exam > 90 || projects > 10) return 100;
  if(exam > 75 & projects >= 5) return 90;
  if(exam > 50 & projects >= 2) return 75;
  return 0;
}