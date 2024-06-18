var strs = ["act", "pots", "tops", "cat", "stop", "hat"];
var res = {};
for (var _i = 0, strs_1 = strs; _i < strs_1.length; _i++) { // Use 'for...of' to iterate over elements of the array
    var s = strs_1[_i];
    var count = new Array(26).fill(0); // Initialize the count array with zeros
    for (var _a = 0, s_1 = s; _a < s_1.length; _a++) { // Use 'for...of' to iterate over characters of the string
        var c = s_1[_a];
        count[c.charCodeAt(0) - 'a'.charCodeAt(0)]++; // Update the count for the character
    }
    var key = count.join(','); // Create a key from the count array
    if (!res[key]) {
        res[key] = [];
    }
    res[key].push(s);
}
var response = Object.values(res);
console.log(response);
