//java script
let updateDate = Date.now();
console.log(updateDate)
//document.getElementsByClassName('')
//console.log(getComputedStyle.Date)

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const big5 = numbers.filter(num => {
    return num > 5;
}).map(num => num * 3);

//const myNums = numbers.map(num => num + 5);
const myNums = numbers.map(num => num + 5).map(num => num * num);


// console.log(big5);
// console.log(myNums);
// console.log(Date()); 

const myTotal = numbers.reduce((acc, curValue) => acc + curValue, 0);
console.log(myTotal);