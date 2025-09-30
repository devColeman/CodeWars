function bonusTime(salary, bonus) {
    // P: given a integer and a boolean
    // R: return a integer
    // E: (5, true) => "£50"
    // P: use a if state to check if its true then 10 if its true
    if(bonus == true){
      return `£${salary * 10}`
    }else {
      return `£${salary}`
    }
  }