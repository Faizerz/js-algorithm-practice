//String Reversal
reverseString = string => {
    return string.split("").reverse.join("")
}

//Is Palindrome?
palindrome = string => {
    let letters = string.split("")
    let reversed = string.split("").reverse()
	for(x=0; x < letters.length; x++){
		if(letters[x].toLowerCase() !== reversed[x].toLowerCase()){
			return false
		}
    }
	return true
}

//Intger Reversal
reverseInteger = integer => {
    return parseInt(integer.toString().split("").reverse().join(""))
}