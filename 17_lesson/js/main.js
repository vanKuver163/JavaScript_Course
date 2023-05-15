const myObj = {name: "Pavel"}

const anotherObj = {
    alive: true,
    answer: 35,
    hobbies: ["Eat", "Sleep", "Code"],
    beverage:{
        morning: "Coffee",
        afternoon: "Iced Tea"
    },
    action: function() {
        return `Time for ${this.beverage.morning}`;
    }
}
console.log(myObj.name);

console.log(anotherObj.action());

const vehicle = {
    wheels: 4,
    engine: function(){
        return "Vrooooom!"
    }
}

const truct = Object.create(vehicle);

truct.doors = 2;
console.log(truct);
console.log(truct.wheels);
console.log(truct.engine());
const car = Object.create(vehicle);
car.doors = 4;
car.engine = function(){return "Whooooosh!"};
console.log(car.engine());
console.log(car.wheels);

const tesla = Object.create(car);
console.log(tesla.wheels);
console.log(tesla.engine());
tesla.engine = function() {return "Shhhh...."};
console.log(tesla.engine());


const band = {
    vocals: "Robert Plant",
    guitar: "Jimmy Page",
    bass: "John Poul Jones",
    drums: "Jhon Bonham"
};


console.log(Object.keys(band));
console.log(Object.values(band));

for (let job in band) {
    console.log(`On ${job}, it's ${band[job]}!`);
}

const{ vocals, guitar, bass, drums} = band;
console.log(guitar);
console.log(vocals);

function sings({vocals}){return `${vocals} sings!`};
console.log(sings(band));