// checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
// checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false



function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    // P: given 4 parameter the check to see if the date is correct
    // R: return either true or false
    // E: '123','123','September 5, 2014','October 1, 2014'=> true
    // '123a','123','September 5, 2014','October 1, 2014'=> false
    // P: use multiple if statements, one for the code then one for the date?
  //   enteredCode === correctCode
    
    let e = enteredCode
    let c = correctCode
    let date1 = new Date(currentDate);
    let date2 = new Date(expirationDate);
    
   
    
    
    if(e === c && date2 >= date1){
      return true
    }else{
       
      return false
    }
  }