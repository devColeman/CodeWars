function ensureQuestion(s) {
  // P: given a string
  // R: return a string
  // E: 'hey' => 'hey?', '' => '?'
  // P: check if the sting includes a ? if it does return the string if not add a string
  
  return s.includes('?') ? s : `${s}?`
}

