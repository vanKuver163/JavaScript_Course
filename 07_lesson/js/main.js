let customerIsBanned = false;
let soup = "chicken noodle soup";
let crackers = true;
let reply;
if (customerIsBanned) {
    reply = "No soup for you!";
} else if (soup && crackers) {
    reply = `Here's your order of ${soup} & crackers.`;
} else if (soup) {
    reply = `Here's your order of ${soup}`;
} else {
    reply = `Sorry, we're out of soup`;
}
console.log(reply);



let testScore = Math.floor(Math.random() * 100 + 1);
let collegeStudent = true;
let grade;

if (testScore >= 90) {
    grade = "A";
} else if (testScore >= 80) {
    grade = "B";
} else if (testScore >= 70) {
    grade = "C";
} else if (testScore >= 60) {
    grade = "D";
} else {
    if (collegeStudent) {
        grade = "U";
    }
    else {
        grade = "F";
    }
}
console.log(grade);


if (playerOne === computer) {

} else if (playerOne === "rock") {
    if (computer === "paper") {

    } else {

    }
} else if (playerOne === "paper") {
    if (computer === "paper") {

    } else {

    }
}
else {

}
