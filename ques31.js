"use strict";
let usernames1 = ["admin", "maryam", "fatima", "asma", "saba"];
for (let i = 0; i < usernames1.length; i++) {
    if (usernames1[i] === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log(`Hello ${usernames1[i]}, thank you for logging in again.`);
    }
}
if (usernames1.length === 0) {
    console.log("We need to find some users!");
}
else {
    usernames1.length = 0;
    console.log("All users have been removed.");
}
console.log(usernames1);
