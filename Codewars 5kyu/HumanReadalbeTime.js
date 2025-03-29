function humanReadable (seconds) {
    // P: given a integer
    // R: return a string in format of hour minutes seconds ex: '01:43:53'
    // E: 60 => '00:01:00', 167 => '00:02:47'
    // P: use a module to get the remaining second and the use it for the numbers aswell
  
    let remainingSeconds = seconds
    remainingSeconds  = remainingSeconds % 60
    seconds = seconds - remainingSeconds
    seconds = seconds / 60
    if(remainingSeconds < 10){
      remainingSeconds = '0' +remainingSeconds
    }
    let remainingMinutes = seconds % 60
    if(remainingMinutes < 10){
      remainingMinutes = '0' + remainingMinutes
    }
    
    seconds = seconds - remainingMinutes
    let remainingHours = seconds / 60
    if(remainingHours < 10){
      remainingHours = '0' + remainingHours
    }
    
    return `${remainingHours}:${remainingMinutes}:${remainingSeconds}`;
  }