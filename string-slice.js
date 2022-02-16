const anthem = 'Amar sonar Bangla Ami tomai Valobasi';

//split()   --- 
const words = anthem.split(' ');
const withoutA = anthem.split('a');
// console.log(withoutA)
// console.log(words);

//slice()   --- string er index er upor nirvor kore surur index theke ses index er modde ar item show kore
const smallSlice = anthem.slice(5, 13);
// console.log(smallSlice);

//substr()  --- string er surur index theke koto index obdi show korbe ta likte hoy;
const anotherPart = anthem.substr(11, 8);
// console.log(anotherPart);

//substring ()  --- string er index er upor nirvor kore surur index theke ses index er আগ পর্যন্ত item show kore
const anotherAnotherPart = anthem.substring(11, 15);
// console.log(anotherAnotherPart);

// concat ()    --- ek string er sathe r ek string ke plus kore
const first = 'amader';
const second = 'City';
// const fullString = first + second;
const fullString = first.concat(second).concat('abc').concat('Rj kibria');
// console.log(fullString);

//join () --- ekta array er sokol  উপাদান কে যোগ করে ekta string make kore. 2 ta join er maje kichu rakte caile ()এর মধ্যে লিখে দিতে হয়
const words2 = ['alim', 'baddon', 'ccaneti', 'david'];
// const allJoined = words2.join('');
// const allJoined = words2.join(' ');
// const allJoined = words2.join(',');
const allJoined = words2.join('www');
console.log(allJoined);
