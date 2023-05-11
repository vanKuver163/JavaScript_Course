let myBoolean = confirm("Ok === True\nCancel === False");
console.log(myBoolean);
let myName = prompt("Please enter your name.");
if (myName)
{
    console.log(myName.length);
    console.log(myName.trim().length);
    console.log(myName.trim());    
} else {
    console.log("You didn't enter your name.");
}
