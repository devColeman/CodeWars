function toCamelCase(str){
    // P: given a string or a empty string
    // R: return a string that is in camalCase style
    // E: "the-stealth-warrior" => "theStealthWarrior" ; '' => '' 
    // P: for the empty string just return the string, for the camal case, split the string then 
    // upperCase() the second array items then rejoin('-')
    // this has to be some of the most jank code ive ever written LMAOO but it works!
      
      let o = str.split('')
      let newStr = str.replaceAll("-", ",").replaceAll("_", ",")
      newStr = newStr.toLowerCase()
      let k = newStr.split(',')
      
    if(str.length === 0){
      return ''
    }else if(o[0] === o[0].toUpperCase()){
    
      
       
      
      for(let i = 0; i < k.length; i++){
       let f = k[i]
       f = f.split('')
       
      f[0] = f[0].toUpperCase()
      f = f.join('')
        k[i] = f
        
       
    }} else{
      
      
      for(let i = 1; i < k.length; i++){
       let f = k[i]
       f = f.split('')
        let z = f.slice(0,1 ).join('')
        z = z.toUpperCase()
       f[0] = z
        f = f.join('')
        k[i] = f
        
      }
    
      
    }
      return k.join('')
    }