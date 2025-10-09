function calculateTip(amount, rating) {
    // P: given a integer and a string
    // R: return a integer
    // E: 10 'Good' => tip = 10 + (10 x .10)
    // P: use a if statement then return a string
     let ratingLowercase = rating.toLowerCase()
      
     if(ratingLowercase == 'excellent'){
        let k = Math.ceil(amount * .20)
        return k
     } else if(ratingLowercase == 'great'){
      let k = Math.ceil(amount * .15)
        return k
    } else if(ratingLowercase == 'good'){
      let k = Math.ceil(amount * .10)
        return k
    }else if(ratingLowercase == 'poor'){
      let k = Math.ceil(amount * .05)
        return k
    } else {
      return 0
    }
    
    
    }