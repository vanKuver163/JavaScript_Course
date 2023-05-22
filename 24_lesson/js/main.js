// import playGuitar from "./guitars.js";
// import { shredding as shred, plucking as fingerpicking } from "./guitars.js";

import * as Guitars from "./guitars.js";
import User from "./user.js";

const me = new User("mail@mail.ru", "Pavel");
console.log(me.greeting());

console.log(Guitars.default());
console.log(Guitars.shredding());
console.log(Guitars.plucking());


