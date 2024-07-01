let input = "ATTGC"

let newString = ""

for (i = 0; i <  input.length; i++){
    letter = input[i]
    if (letter == "A"){
        newString += "T"
    } if (letter == "T") {
        newString += "A"
    } if (letter == "C"){
        newString += "G"  
    } if (letter == "G") {
        newString += "C"
    }
}


console.log(newString)