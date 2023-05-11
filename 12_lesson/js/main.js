let myNumber = 0;

while(myNumber <= 5){
    console.log(myNumber);
    myNumber++;
}


do {
     console.log(myNumber);
    myNumber++;
}while (myNumber <= 5);

let myName = "Pavel";

for(let i = 0; i < myName.length; i++ )
{
    console.log(myName[i]);
    
}


let counter = 0;
let myLetter;
while(counter <= 4){
    myLetter = myName[counter];
    console.log(myLetter);
    if (counter === 1){
        counter +=2 ;
        continue;
    }
    if(myLetter === "l") break;
    counter++;
}
console.log(counter);