"use strict";
const variable = "Pavel";
console.log(variable);

const makeError = () => {
    let i = 1;
    while(i<=5){
        try {
            if(i % 2 !==0){
                throw new Error("Odd number!");
            } 
            console.log("Even number!");         
        }catch(err){
            console.error(err.name);
            console.error(err.message)
            console.error(err.stack);        
        }finally {
            console.log("...finally");
            i++;
        }
    }
  
}
makeError();

function customError(message){
    this.message = message;
    this.name = "customError";
    this.stack = `${this.name}: ${this.message}`;
}