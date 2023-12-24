// 1
//function sum(n) {
//     console.log(n);
//     return function (a) {
//         return sum(a + n);
//     };
// }

// sum(5);
// console.log("-----");
// sum(5)(9)(6);

// 2
// const mergeSameKeysOfObject = (obj1, obj2) => {
//     let keys1 = Object.keys(obj1);
//     let keys2 = Object.keys(obj2);
//     for (let i = 0; i < keys1.length; i++) {
//         let key1 = keys1[i];
//         for (let j = 0; j < keys2.length; j++) {
//             let key2 = keys2[j];
//             if (key1 === key2) {
//                 obj1[key1] = obj2[key2];
//             }
//         }
//     }
//     console.log(obj1);
// };

// another way
// const mergeSameKeysOfObject = (obj1, obj2) => {
//     for (const key in obj1) {
//         if (obj2.hasOwnProperty(key)) {
//             obj1[key] = obj2[key];
//         }
//     }
//     console.log(obj1);
// };
// mergeSameKeysOfObject({ foo: "foo", bar: "bar" }, { bar: "foo", some: "some" });

// 3
// const groupBy = (arr, callbackFunction) => {
//     const result = {};
//     arr.forEach((item) => {
//         let resultAfterCallback = callbackFunction(item);
//         result[resultAfterCallback]
//             ? result[resultAfterCallback].push(item)
//             : (result[resultAfterCallback] = [item]);
//     });
//     console.log(result);
// };
// groupBy([6.1, 4.2, 6.3], Math.floor);

// 4 Задача на замыкание, прототипирование, контекст, стрелочные функции, спред оператора
// const START = Date.now();
// function someFn() {
//     console.log(Date.now() - START);
//     console.log("args", arguments);
// }

// Function.prototype.delay = function (ms) {
//     return (...args) => {
//         setTimeout(() => {
//             this.call(this, ...args);
//         }, ms);
//     };
// };

// const f = someFn.delay(500);

// f("arg1", "arg2", 1, 2);

// 5 алгоритм обход дерева
const tree = [
    {
        v: 5,
        c: [
            {
                v: 10,
                c: [
                    {
                        v: 11,
                    },
                ],
            },
            {
                v: 7,
                c: [
                    {
                        v: 5,
                        c: [
                            {
                                v: 1,
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        v: 5,
        c: [
            {
                v: 10,
            },
            {
                v: 15,
            },
        ],
    },
];

const recursive = (tree) => {
    let sum = 0;
    tree.forEach((node) => {
        sum += node.v;
        if (!node.c) {
            return node.v;
        }

        sum += recursive(node.c);
    });
    return sum;
};

const iteration = (tree) => {
    if (!tree.length) {
        return 0;
    }
    const stack = [];
    let sum = 0;
    tree.forEach((node) => {
        stack.push(node);
    });
    while (stack.length) {
        const node = stack.pop();
        sum += node.v;
        if (node.c) {
            node.c.forEach((n) => {
                stack.push(n);
            });
        }
    }
    return sum;
};

//console.log(recursive(tree));
console.log(iteration(tree));
