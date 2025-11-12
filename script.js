console.log("Hello World!");
let a;
console.log(a);
a = 7;
console.log(a);
a = 'bye';
console.log(a);
a = true;
console.log(a);
//a = undefined;
//console.log(a);
a = null;
console.log(a);
const pi = 3.12232434;
console.log(pi);
// pi = 3.12;
console.log('pi = ' + pi);
a =`Hello`;
console.log(a);
const piRounded = 3.14;
a = 'pi = ' + pi + ', or ' + piRounded;
console.log(a);
a = `pi = ${pi} or ${piRounded}`;
console.log(a);
let res = 7 % 3;
console.log(`res = ${res}`);
res = 3 ** 4;
console.log(`res = ${res}`);
a = 3 + true;
console.log(a);
a = 5 * false;
console.log(a);
a = 3 * '5';
console.log(a);
a = 3 * 'five';
console.log(a);
a = 3 / 0;
console.log(a);
console.log(isFinite(a));
a = 0 / 0;
console.log(a);
console.log(isNaN(a));
a = 10 / null;
console.log(a);
a = 10 / undefined;
console.log(a);
a = 'string' + 0 / 0;
console.log(a);
a = '5' > 3;
console.log(a);
a = 'five' < 3;
console.log(a);
a = 'five' > 3;
console.log(a);
a = 'five' == 3;
console.log(a);
res = '2' == 2;
console.log(`res = ${res}`);
res = '2' === 2;
console.log(`res = ${res}`);
let age = 25;
let vol = age >= 18? 42: 1.5;
console.log(`vol = ${vol}`);
res ='5';
switch (res) {
    case 5:
        console.log(`number : ${res}`);
        break;
    case '5':
        console.log(`string: ${res}`);
        break;
    default:
        console.log(`not a 5`);
}
console.log('===loop====');
// let = i
for (let i = 1; i <= 5 ; i++) {
    console.log(i)
}
// console.log(i);
console.log('===types===');
res = 4;
console.log(typeof res);
res = '4';
console.log(typeof res);
res = true;
console.log(typeof res);
res = undefined;
console.log(typeof res);
res = null;
console.log(typeof res);




