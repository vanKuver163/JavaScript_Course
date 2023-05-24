
// //Callbacks
// function firstFunction(parameters, callback){
//     callback();
// };

// firstFunction(para, function {
//     secondFunction(para, function() {
//         thirdFunction (para, function() {

//         });
//     });
// });

//Promises

const myPromise = new Promise((resolve, reject) => {
    const error = false;
    if(!error) {
        resolve("Yes! resolved the promise!");
    }else {
        reject("No! rejected the promise.");
    }
});

// console.log(myPromise);

// myPromise.then(value => {   
//     return value+1;
// }).then(newValue => {
//     console.log(newValue);
// }).catch(err => {
//     console.error(err);
// });


const myNextPromise = new Promise((resolve, reject) => {
    setTimeout(function() {
        resolve("myNextPromise resolved!");
    }, 3000);
});

myNextPromise.then(value => {
    console.log(value);
});

myPromise.then((value) => {
    console.log(value);
});

const myUsers = {
    userList: []
}

const getDataFromForm = () => {
    const requestObj = {
        firstName: "Bruce",
        lastName: "Lee",
        categories: ["nerdy"]
    };
    return requestObj;
}

const buildRequestUrl = (requestData) => {
    return `http://api.icndb.com/jokes/random?firstName=${requestData.firstName}&lastName=${requestData.lastName}&limitTo=&{requestData.categories}`;
}

const requestJoke = async(url) => {
    const response = await fetch(url); 
    const jsonResponse = await response.json(); 
    const joke = jsonResponse.value.joke;
    postJokeToPage(joke);
}

const postJokeToPage = (joke) => {
    console.log(joke);
}

const processJokeRequest = async () => {
    const requestData = getDataFromForm();
    const requestUrl = buildRequestUrl(requestData);
    await requestJoke(requestUrl);
    console.log("finished!");
}

processJokeRequest();

    
 


// const anotherFunc = async () => {
//     const data = await myCoolFunction();
//     myUsers.userList = data;
//     console.log(myUsers.userList);
// }


// anotherFunc();


// const users  = fetch("https://jsonplaceholder.typicode.com/users").then(response => {
//     console.log(response);
//     return  response.json();
// }).then(data => {
//     data.forEach(element => {
//         console.log(element);
//     });
// });

// console.log(users);



