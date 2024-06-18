let message: string = 'Hello World';
console.log(message);

let nums = [1, 2, ,3 ,2 ]


nums.sort(function(a, b){return a-b})

console.log(nums)

const tamanho = nums.length -1

for (let i = 0; i < tamanho; i++) {
    if(nums[i] == nums[i+1]) {
        console.log("repetiu")
    }
    console.log("nao repete")

}   
