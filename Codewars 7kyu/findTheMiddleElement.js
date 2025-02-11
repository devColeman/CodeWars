// gimme([2, 3, 1]) => 0
// gimme([5, 10, 14]) => 1


function gimme (triplet) {
  
    let k = triplet.filter((n) => typeof n === 'number')
    k.sort((a,b) => a - b)
      let z = k[1]
    return triplet.indexOf(z)
    }