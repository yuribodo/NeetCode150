function containsDuplicate(nums: number[]): boolean {
    nums.sort(function(a, b){return a-b})
    const tamanho = nums.length -1
    for (let i = 0; i < tamanho; i++) {
        if(nums[i] == nums[i+1]) {
            return true
        }
    }   
    return false
};