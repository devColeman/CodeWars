// "riley" --> "Hello Riley!"
// "JACK"  --> "Hello Jack!"

var greet = function(name) {
    // P: given a string the includes a name
    // R: return given name with the first letter capitalized and a ! point at the end
    // E: 'bOb' => 'Hello Bob!' 'zion' => 'Hello Zion' 'DEVIN' => 'Hello Devin!'
    // P: first use toLowerCase to get a base line, then capitalize the first letter and return it in a template literal string
      
      let nameFirst = name[0].toUpperCase()
      let nameRest = name.slice(1).toLowerCase()
      return `Hello ${nameFirst + nameRest}!`
    };