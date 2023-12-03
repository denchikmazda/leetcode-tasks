// Brute force
// function containsDuplicate(nums: number[]): boolean {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] === nums[j]) return true;
//         }
//     }
//     return false;
// }

// SET
// function containsDuplicate(nums: number[]): boolean {
//     const set = new Set();
//     for (let i = 0; i < nums.length; i++) {
//         if (set.has(nums[i])) return true;
//         else set.add(nums[i]);
//     }
//     return false;
// }

function containsDuplicate(nums: number[]): boolean {
    const hash: { [key: number]: number } = {};
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] in hash) {
            return true;
        }
        hash[nums[i]] = i;
    }
    return false;
}

const nums = [1, 1];
console.log(containsDuplicate(nums));
