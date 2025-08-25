function countDevelopers(list) {
    // P: given a list of devs 
    // R: return the type of language the dev does
    // E: given a list with 2 devs who do js return 
    // P: check each array item to see if it pass then add to a total
    let total = 0
    list.forEach((k) => {
      if(k.continent == 'Europe'){
        if(k.language == 'JavaScript'){
          total += 1
        }
      }
    })
  return total
  }