function pigIt(str){
    // P: given a str
    // R: return the string
    // E: 'Hello Devin' => 'elloH evinD', 'Hey Bob Man' => 'eyH boB anM'
    // P: split the str, use pop to remove the first item then push the item in then push in the 'ay'
    
  let k =  str.split(' ').map((n) => {
      n = n.split('')
      let z = n.shift()
  
      if(z == '!' || z == '?'){
         n.push(z)
      
      } else {
        n.push(z)
        n.push('ay')
  }
     
  return n.join('')
    })
  
  return k.join(' ')
  }