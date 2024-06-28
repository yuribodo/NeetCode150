var digit = 16


const func = (numbers) => {

    var newNumbers = numbers.toString().split("")
    var sum = 0
    for (i =0 ; i < newNumbers.length; i++){
        sum = sum+parseInt(newNumbers[i])
        
    }
    return sum
}

while (digit >= 10) {
    digit = func(digit);
  }



console.log(sum)