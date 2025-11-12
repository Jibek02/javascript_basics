let res = sumDigits(12345);
console.log(`sum digits =${res}`); // 15
res = sumDigits(738);
console.log(`sum digits =${res}`); //18
res = luckyNumber(123871);  // 1 +3 +7 === 2 + 8 + 1 lucky
console.log(`${res ? 'lucky': 'not lucky'}`);
res = luckyNumber(123971);  // 1 +3 +7 !== 2 + 9 + 1 not lucky
console.log(`${res ? 'lucky': 'not lucky'}`);
res = luckyNumber(12397);  // 1 +3 +7 === 2 + 9 lucky
console.log(`${res ? 'lucky': 'not lucky'}`);




function sumDigits(num) {
    //TODO Homework 1 return sum digits of num

}
function  luckyNumber(num) {
    /* TODO HW 2(Advanced) return true if num is a
     lucky number and false otherwise.
     lucky number if sum digits on odd positions equals
     sum digits on even positions
     */
}