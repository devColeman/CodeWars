function getAverage(marks){
    //TODO : calculate the downward rounded average of the marks array
    let f = marks.reduce((acc, curr) => acc + curr);
    return Math.floor(f / marks.length)
  }