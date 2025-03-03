function sayHello( name, city, state ) {
    // P: given a name array and city and state string
    // R: return a template literal that say hello and say welcome
    // E: ['John', 'Smith'], 'Phoenix', 'Arizona' => 'Hello, John Smith! Welcome to Phoenix, Arizona!'
    // P: join the array then use a template literal
    name = name.join(' ')
    return `Hello, ${name}! Welcome to ${city}, ${state}!`
  }