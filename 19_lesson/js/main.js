const myObj ={
    name: "Pavel",
    hobbies: ["eat", "sleep", "code"],
    hello: function(){
        console.log("Hello!");
    }
};

console.log(myObj);
console.log(myObj.name);
myObj.hello();
console.log(typeof myObj);

const sendJSON = JSON.stringify(myObj);
console.log(sendJSON);
console.log(typeof sendJSON);

const receviJSON = JSON.parse(sendJSON);
console.log(receviJSON);
console.log(typeof receviJSON);
