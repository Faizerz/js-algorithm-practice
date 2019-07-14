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

//Fizz Buzz
fizzbuzz = number => {
    for(let x=1; x <= number; x++){
        if(x%2 == 0 && x%3 == 0) { //x%6 == 0 would also work as it's the lowest common multiple
            console.log("Fizz Buzz")
        } else if (x%2 == 0) {
            console.log("Fizz")
        } else if (x%3 == 0) {
            console.log("Buzz")
        } else {
            console.log(x)
        }
    }
}