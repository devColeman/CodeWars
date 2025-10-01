function cookie(x){
    // P: given a string, integer
    // R: return a string
    // E: "Hye" => 'It was Zach'
    // P: use a if statment to check if its a string or number then return a string
    
    if(typeof(x) == 'string'){
       return 'Who ate the last cookie? It was Zach!'
       } else if(typeof(x) == 'number'){
         return 'Who ate the last cookie? It was Monica!'
       } else {
         return 'Who ate the last cookie? It was the dog!'
       }
  }