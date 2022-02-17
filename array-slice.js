///slice()  --- Array er index er upor nirvor kore surur index theke ses index er আগ পর্যন্ত item show kore. array not chenged
const number = [2, 3, 4, 5, 6, 7, 45, 62, 23];
const numberSliced = number.slice(4, 8);
// console.log(numberSliced);
// console.log(number);

//splice() -- ulekhito suru er index theke নির্দারিত index er ayg obdi index data delate kore show kore.array chenged
//splice to remove the array document
// const numberSpliced = number.splice(4, 2); 
// console.log(numberSpliced);
// console.log(number);

//splice() er modde data add kore o jaj
const numberSpliced2 = number.splice(4, 3, 99, 111, 999, 777);
console.log(numberSpliced2);
console.log(number);