// local time 
const myFavDate = new Date('1971-12-16');
// console.log(myFavDate);

const anotherDate = new Date(1971, 3, 26, 11, 50, 40, 80);
// console.log(anotherDate);

//monent.js online web

if (myFavDate.getTime() < anotherDate.getTime()) {
    // console.log('favorite is earlier');
}

console.log(Date())