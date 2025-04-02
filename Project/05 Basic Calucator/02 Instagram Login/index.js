let field1 = document.getElementById("field1");
let field2 = document.getElementById("field2");

let abc1 = document.getElementById("abc1");
let abc2 = document.getElementById("abc2");

field1.addEventListener("focusin", () => {
  abc1.style.fontSize = "10px";
  abc1.style.top = "129px";
});

field1.addEventListener("focusout", () => {
  if (field1.value == "") {
    abc1.style.fontSize = "12px";
    abc1.style.top = "146px";
  }
});

field2.addEventListener("focusin", () => {
  abc2.style.fontSize = "10px";
  abc2.style.top = "170px";
});

field2.addEventListener("focusout", () => {
  if (field2.value == "") {
    abc2.style.fontSize = "12px";
    abc2.style.top = "185px";
    // console.log(field2.value.length);
  }
});


// let xyz = field2.getAttribute


let hbtn = document.getElementById("hbtn")

// function chai()
// {
//     console.log("Hello")
// }



field2.addEventListener("input",() => {
    if(field2.value.length <= 0)
    {
        hbtn.style.opacity = "0"
    }
    else {
        hbtn.style.opacity = "100%"
    }
})


hbtn.addEventListener("click",() => {
    let a = field2.getAttribute("type")
    if(a == "password")
    {
        hbtn.textContent = "Hide"
        field2.setAttribute("type","text")
    }
    else {
        hbtn.textContent = "Show"
        field2.setAttribute("type","password")
    }
})


let btn = document.getElementById("btn")

field2.addEventListener("input",() => {
    if(field2.value.length >= 6)
    {
        btn.style.backgroundColor = "rgb(0, 149, 246)";
        btn.style.color = "white";
        btn.style.cursor = "pointer"
    }
    else {
        btn.style.backgroundColor = "rgb(0,105,173)";
        btn.style.color = "rgb(137,158,172)";
        btn.style.cursor = "auto"
    }
})

