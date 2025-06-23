function checkExam(array1, array2) {
    // P: given two array one with correct answers in a array and the second with the students
    // answers
    // R: return a a number of the score of the test
    // E: [a,b,c,d] => [b,b,b,b] = 1
    // P: use a forEach to check then add a plus one to a counter
  
    let k = 0
    array1.forEach((n, i) => {
      if(n === array2[i]){
        k += 4
      } else if(array2[i] === ''){
        k += 0
      }
      else {
        k -= 1
      }
    })
    
  if(k < 0 ){
    return 0
  }else {
    return k
  }
  }