// var x = 1;
// var x = 2;

// let x = 1;
// x = 2;

// const x = 1;

// console.log(x);

// var x = 1;
// let y = 2;
// const z = 3;



// function myFunc() {
//     const z = 5;
//     console.log(y);
//     if(true){
//         let y = 4;
//         console.log(y);
//     }
// }

// myFunc();

var x = 1;
let y = 2;
const z = 3;

console.log(`global: ${x}`);
console.log(`global: ${y}`);
console.log(`global: ${z}`);

function myFunc() {
    var x = 10;
    const z = 5;
    // console.log(`function: ${x}`);
    // console.log(`function: ${y}`);
    // console.log(`function: ${z}`);

    {
        var x =11;
        const z = 6;
        console.log(`block: ${x}`);
        console.log(`block: ${y}`);
        console.log(`block: ${z}`);
    }

    console.log(`function: ${x}`);
    console.log(`function: ${y}`);
    console.log(`function: ${z}`);

}

myFunc();