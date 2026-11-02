function fakeBin(x){
    // P: string
    // R: string
    // E: '12345' => '00001'
    // P:use a forEach and use if its greater then or lower than 5
    // maybe turn it into a array first?
      
      x = x.split('')
      x.forEach((num, i, arr) =>{
         if (Number(num) < 5){
         arr[i] = 0
       }else{
         arr[i] = 1
       }
      
      })
      
      return x.join('')
    }