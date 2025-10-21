function hello(name) {
    // P: given a string
    // R: return a string
    // E: 'Bob' => 'Hello, Bob', '' => 'Hello, World'
    if(name == undefined || name == '' ){
     return `Hello, World!` 
    }else{
      name = name.toLowerCase()
     let k = name.slice(0,1).toUpperCase()
     name = name.slice(1)
      return `Hello, ${k}${name}!`
    }
  }


  
  

  