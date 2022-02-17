const myName = 'ami';

// throw ''
// try catch ---- error handling 
try {
    myName = 'tumi';
}
catch (error) {
    console.log('getting error', error);
}
// finally

console.log(myName);