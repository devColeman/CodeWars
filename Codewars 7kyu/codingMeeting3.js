function isRubyComing(list) {
    // P: given a array of objects
    // R: return a boolean
    // E: givne a array without any ruby dev return false, otherwise return true if at least
    // one dev is coming
    // P: make a total then check if the total is above 1
     
     let total = 0
     
     list.forEach((n) => {
       if(n.language === 'Ruby'){
         total += 1
       }
     })
     
     return total >= 1 ? true : false
   }