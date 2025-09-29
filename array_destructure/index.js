console.log("Hello Node.js");
console.log("Some updates on index.js");
console.log("An update with nodemon");

console.log("Array Destructuring");
let arr = [10, 999];
let [a, b] = [10, 999];
console.log("a:", a, "b:", b);

a = arr[0];
b = arr[1];

console.log("a:", a, "b:", b);

const [c, d] = [100, 200, 300, 400, 500];
console.log("c:", c, "d:", d);

// spread operator
const [e, f, ...g] = [100, 200, 300, 400, 500];
console.log("e:", e, "f:", f, "g:", g);

// let's mimic useState
const mimicState = ()=>{
    return [100, 200]
}

const [ret1, ret2] = mimicState();
console.log("ret1:", ret1, "ret2:", ret2)
