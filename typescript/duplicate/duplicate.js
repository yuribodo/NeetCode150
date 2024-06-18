class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        nums.sort(function (a, b) { return a - b; });
        var tamanho = nums.length - 1;
        for (var i = 0; i < tamanho; i++) {
            if (nums[i] == nums[i + 1]) {
                return true
            }
        }
        return false
    }
}
