
function sum (num1, num2){
    if (num2 === undefined) {
        return num1+num1;
    }
    return num1 + num2;
}

console.log(sum(5,2));

function getUserNameFromEmail(email){
    return email.slice(0, email.indexOf("@"));
}

console.log(getUserNameFromEmail("mail@gmail.com"));

const getName = (email) => {return email.slice(0, email.indexOf("@"));}

console.log(getName("user@gmail.com"))

const toProperCase = (name) => {
    return name[0].toUpperCase() + name.slice(1).toLowerCase();    
}

console.log(toProperCase("pAvEl"));