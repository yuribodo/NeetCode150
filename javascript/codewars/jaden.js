var phrase = "How can mirrors be real if our eyes aren't real"

let newString = ""


var elements  = phrase.split(" ")

for ( i = 0; i < elements.length; i++){
    
    let firstletter = elements[i].charAt(0)
    let firstletterCap = firstletter.toUpperCase()

    let remaingletters = elements[i].slice(1)

    let capitalizeword  = firstletterCap + remaingletters

    if (i > 0){
        newString += " "
    }

    newString += capitalizeword
}

console.log(newString)