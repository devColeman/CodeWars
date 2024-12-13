/* accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt" */


function accum(s) {
    return s
        .split('') // Split the string into an array of characters
        .map((char, index) => 
            char.toUpperCase() + char.toLowerCase().repeat(index) // Format each character
        )
        .join('-'); // Join the array into a string with hyphens
}
