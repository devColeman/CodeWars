function greetDevelopers(list) {
    // P: given a array of objects
    // R: return the array with the same object but with a string that has a greeting for the person
    // E: [{firstName: 'Devin'}] => [{firstName: 'Devin', greeting: 'Hi sofia, what do you like the most about Java'}]
    // P: Add the item to the object using a template literal
    
    list.forEach((n) => {
      n.greeting = `Hi ${n.firstName}, what do you like the most about ${n.language}?` 
    })
    
  return list
  }