// function twoSum(nums: number[], target: number): number[] {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] === target) {
//                 return [i, j];
//             }
//         }
//     }

//     return [];
// }

function twoSum(nums: number[], target: number): number[] {
    const result: { [index: number]: number } = {};
    // key - value item in array, value - index
    for (let i = 0; i < nums.length; i++) {
        if (result[target - nums[i]] !== undefined) {
            return [result[target - nums[i]], i];
        }
        result[nums[i]] = i;
    }

    return [];
}

const numbers = [11, 15, 2, 7];
const target = 9;
console.log(twoSum(numbers, target));
