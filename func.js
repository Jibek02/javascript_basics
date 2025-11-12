let a = 10;
let b = 5;
let res = add(a, b);
console.log(`result: ${res}`);
res = greeting('John');
console.log(res);
let c = 'Peter';
greeting(c);
greeting();



function add(a, b) {
    return a + b;
}

function greeting(name) {
    // name = name || 'Anonymous';
   // name == name ?? 'Anonymous';
    console.log(`Hello ${name}`);
}