"use strict";
function isLegal(user) {
    console.log(user.age);
    if (user.age > 15)
        return true;
    else
        return false;
}
function greet(user) {
    console.log("ji " + user.firstName);
}
isLegal({
    firstName: "neeraj",
    lastName: "pawar",
    age: 39
});
greet({
    firstName: "neeraj",
    lastName: "pawar",
    age: 39
});
