let lightbtn = document.getElementById("light")
let darkbtn = document.getElementById("dark")

let body = document.getElementById("body");


const light = () => {
    console.log(localStorage.getItem("mode"))
    localStorage.setItem("mode","light");
}

const dark = () => {
    console.log(localStorage.getItem("mode"))
    localStorage.setItem("mode","dark")
}

let mode = localStorage.getItem("mode");


document.addEventListener("DOMContentLoaded",() => {
    console.log(body);
    
    if(mode == "light")
    {
        // console.log(localStorage.getItem("mode"))
        body.style.backgroundColor = "white";
        body.style.color = "black";
    }
    else {
        body.style.backgroundColor = "black";
        body.style.color = "white";

    }
})