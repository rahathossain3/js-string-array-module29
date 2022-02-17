// argument --------- holo array like object--  limete less parameter naya jay
//argument for number  
function addNumbers(num1, num2) {
    // console.log(arguments);
    // console.log(arguments[1]);
    let result = 0;
    for (const num of arguments) {
        result = result + num;
        // console.log(num);
    }
    // const result = num1 + num2;
    return result;
}
const sum = addNumbers(23, 13, 50, 100, 420, 54, 4);
// console.log(sum);

//argumant for string
function getFullName(firstName, lastName) {
    let fullName = '';
    for (const part of arguments) {
        fullName = fullName + part + ' ';
    }
    return fullName;
}
const name = getFullName('omuk', 'sonket', 'bin', 'hanif', 'sonket', 'bin', 'tomuk', 'sonket');
console.log(name)