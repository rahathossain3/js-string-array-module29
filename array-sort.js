//sort()  -- serial korar jonno use kora hoy

const numbers = [3, 4, 5, 7, 2, 8, 9, 1, 6];
const sortedNumbers = numbers.sort();
// console.log(sortedNumbers);

const friends = ['kabli', 'josim', 'razzak', 'anwar', 'depjaol', 'badsha'];
// const sortedFriends = friends.sort();
// console.log(sortedFriends);

// .reverse() ulta din diye array show kore kore
// const reversedFriedn = friends.reverse();
// console.log(reversedFriedn);

const sortedReversedFriends = friends.sort().reverse();
console.log(sortedReversedFriends);


//number sorting fun
//js a number sorting korte hole
const bigNumber = [66, 55, 81, 92, 9, 6, 37, 13, 2];
const sortedBigNumber = bigNumber.sort(function (a, b) {
    return a - b;
});
console.log(sortedBigNumber);