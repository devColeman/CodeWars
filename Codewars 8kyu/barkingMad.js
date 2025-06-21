function Dog (breed) {
  this.breed = breed;
  this.bark = ()=> {
    return 'Woof'
  }
  
}

var snoopy = new Dog("Beagle");

snoopy.bark = function() {
  return "Woof";
};



var scoobydoo = new Dog("Great Dane")
