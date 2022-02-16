/* 
function megaFriend(number) {
    let friend = [];
    for (let i = 0; i < number.length; i++) {
        const fre = number[i];
        if (friend.length < fre.length) {
            friend = fre;

        }
    }
    return friend;
}
const mege = ['rahat', 'fahim', 'tarissskk', 'teemmate', 'dh', 'dddd'];
const okkFile = megaFriend(mege);
console.log(okkFile);
 */

function megaFriend(friends) {
    // .isArray ()  parameter array naki ta chack korar jonno
    if (Array.isArray(friends) == false) {
        return 'please provide an array';
    }
    let mege = friends[0];
    for (const friend of friends) {
        if (friend.length > mege.length) {
            mege = friend;
        }
    }
    return mege;
}
const friends = ['kutos', 'dssss', 'shamol', 'sabbir'];
const myBoody = megaFriend(friends);
console.log(myBoody);