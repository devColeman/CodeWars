function whatday(num) { 
    // P: given a integer
    // R: return a string
    // E: 3 = 'Tuesday'
    // P: use a switch to return the right string
  
    switch(num){
        case 1: 
        return 'Sunday'
        break;
        case 2:
        return 'Monday'
        break;
        case 3:
        return 'Tuesday'
        break;
        case 4:
        return 'Wednesday'
        break;
        case 5:
        return 'Thursday'
        break;
        case 6:
        return 'Friday'
        break;
        case 7:
        return 'Saturday'
        break;
        default:
        return 'Wrong, please enter a number between 1 and 7'
    }
  
  
  }