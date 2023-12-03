// function validAnagram(s: string, t: string): boolean {
//     if (s.length !== t.length) return false;
//     return s.split("").sort().join("") === t.split("").sort().join("");
// }

function validAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false;

    const sMap: { [key: string]: number } = {};
    const tMap: { [key: string]: number } = {};

    for (let i = 0; i < s.length; i++) {
        sMap[s[i]] = (sMap[s[i]] ?? 0) + 1;
        tMap[t[i]] = (tMap[t[i]] ?? 0) + 1;
    }

    for (let key in sMap) {
        if (sMap[key] !== tMap[key]) return false;
    }

    return true;
}

const s = "anagram";
const t = "nagaram";

console.log(validAnagram(s, t));
