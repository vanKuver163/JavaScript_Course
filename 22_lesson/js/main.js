// const view = document.querySelector("#view2");
// const div = view.querySelector("div");
// const h2 = div.querySelector("h2");
// const doSomething = () => {
//     alert("doing something");
// }

// h2.addEventListener("click", doSomething, false);
// h2.removeEventListener("click", doSomething, false);

// h2.addEventListener("click", (e) => {
//     console.log(e.target);
//     e.target.textContent = "Clicked";
// })


document.addEventListener("readystatechange", (e) => {
    if (e.target.readyState === "complete") {
        console.log("readyState: complete");
        initApp();
    }
})

const initApp = () => {
    const view = document.querySelector("#view2");
    const div = view.querySelector("div");
    const h2 = div.querySelector("h2");

    view.addEventListener("click", (e) => {       
        view.classList.toggle("purple");
        view.classList.toggle("darkblue");
    }, false );

    div.addEventListener("click", (e) => {       
      
        div.classList.toggle("blue");
        div.classList.toggle("black");
        
    }, false);

    h2.addEventListener("click", (e) => {   
        const myText = e.target.textContent;
        myText === "My 2nd View" 
        ? (e.target.textContent = "Clicked")
        : (e.target.textContent = "My 2nd View");
    }, false);

    const nav = document.querySelector("nav");
    nav.addEventListener("mouseover", (e) => {
        e.target.classList.add("height100");
    });
    nav.addEventListener("mouseout", (e) => {
        e.target.classList.remove("height100");
    });


    const view3 = document.querySelector("#view3");
    const myForm = view3.querySelector("#myForm");
    myForm.addEventListener("submit", (e) => {
        e.preventDefault();
        console.log("submit event");
    })
}