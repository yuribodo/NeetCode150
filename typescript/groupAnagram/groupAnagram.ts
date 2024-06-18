let strs = ["act","pots","tops","cat","stop","hat"];

let res = {};

for (let s of strs) {  // Use 'for...of' to iterate over elements of the array
    let count = new Array(26).fill(0);  // Initialize the count array with zeros
    for (let c of s) {  // Use 'for...of' to iterate over characters of the string
        count[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;  // Update the count for the character
    }
    let key = count.join(',');  // Create a key from the count array
    if (!res[key]) {
        res[key] = [];
    }
    res[key].push(s);
}

let response: string[][] =  Object.values(res)

console.log(response);
