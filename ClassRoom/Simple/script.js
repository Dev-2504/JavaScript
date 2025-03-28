// let arr = ["Apple","Grapes","Banana","Orange"]
// let num = 1
// function change()
// {
//     let heading = document.getElementById("heading")
//     heading.textContent = arr[num]
//     num++

//     if(num == arr.length)
//     {
//         num = 0;
//     }
// }


let color = ["orange","pink","skyblue"]

let num = 0;

function change(){
    let heading = document.getElementById("heading")
    heading.style.backgroundColor = color[num]
    num++

    if(num == color.length)
    {
        num = 0;
    }
}