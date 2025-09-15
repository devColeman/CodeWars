String.prototype.isUpperCase = function() {
    //  // P: given a string
    // R: return a boolean
    // E: "hEY" => false, 'HEY' => true
    // P: chekc if the string == to the string uppercase()
    console.log(this.toUpperCase())
    
    return this == this.toUpperCase() ? true: false;
  }