var input = "The sunset sets at twelve o' clock.";
input = input.toLocaleLowerCase()
console.log(input)
var elements = input.split(" ");

console.log(elements);

var digits = "";

var result = []

for (var i = 0; i < elements.length; i++) {
    if (elements[i]) { // Verifica se o elemento não é undefined ou vazio
        for (var x = 0; x < elements[i].length; x++) {
            var num = elements[i].charCodeAt(x);
            if (97 <= num && num <= 122) {
                num = num - 96
                result.push(num)
            }
        }
    }
    digits = result.join(" ")
}



console.log(digits);
