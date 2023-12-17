// function isValid(s: string): boolean {
//     const stack: string[]  = [];
//     const brackets = { '(': ')', '{': '}', '[': ']'};
//     for(let i = 0; i<s.length; i++) {
//         const bracket = s[i];
//         if(bracket === '(' || bracket === '{' || bracket ==='[') {
//             stack.push(bracket);
//         }
//         else {
//             const lastBracket = stack.pop()
//             if(bracket !== brackets[lastBracket]) return false;
//         }
//     }
//     if(stack.length) { return false }
//     return true;
// };

function isValid(s: string): boolean {
    const brackets: { [key: string]: string } = { ")": "(", "}": "{", "]": "[" };
    const stack: string[] = [];
    const chars = s.split("");

    for (const bracket of chars) {
        if (bracket === ")" || bracket === "}" || bracket === "]") {
            const opening = stack.pop();
            if (brackets[bracket] !== opening) return false;
        } else {
            stack.push(bracket);
        }
    }
    return stack.length === 0;
}

const str: string = "()[]{}";
console.log(isValid(str));
