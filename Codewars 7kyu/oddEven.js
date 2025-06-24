function sortMyString(s) {
    // P: given a string  
    // R: return a string
    // E: Devin => 'Dvn ei'
    // P: just filter the by using number % 2 !== 0 then use a template literal to return the string
   let f =  s.split('').filter((word, i) => i % 2 !== 0).join('')
   let k =  s.split('').filter((word, i) => i % 2 === 0).join('')
    return `${k} ${f}`
  
  }