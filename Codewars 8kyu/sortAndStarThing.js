function twoSort(s) {
    // P: given a array with string inside it
    // R: return the first value with three *** between each letter
    // E: ['hello', 'tuff'] => "t***u***f***F"
    // P: use js sort then split it then join using the *'s'
      s.sort()
      return s[0].split('').join('***')
    }