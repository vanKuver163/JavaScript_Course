
const myArray = ['eat', 'sleep', 'code'];
const myObject = {    
    name: "Pavel",
    hobbies: ["eat", "sleep", "code"],
    logName: function() {
        console.log(this.name);
    }
}


myObject.logName();

localStorage.setItem("myLocalStorage", JSON.stringify(myObject));
// localStorage.clear();
const key = localStorage.key(0);
const mySessionData = JSON.parse(sessionStorage.getItem("myLocalStorage"));
console.log(key);