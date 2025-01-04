// ["Telescopes", "Glasses", "Eyes", "Monocles"] => ["Eyes", "Glasses", "Monocles", "Telescopes"]


function sortByLength (array) {
    // P: you will always be given a array with item inside
    // R: you will return a array that is sorted by the biggest string at the end and the smallest at the beginnging
    // E: ["Telescopes", "Glasses", "Eyes", "Monocles"] => ["Eyes", "Glasses", "Monocles", "Telescopes"]
    // P: array.sort((a,b) b - a) the return this? don't use the this sort way this is based on numbers
      return array.sort((a,b) => a.length - b.length)
     
  }