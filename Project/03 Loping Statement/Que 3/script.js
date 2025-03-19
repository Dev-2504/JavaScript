// Sum of All Number
let a = prompt("Enter a Number : ")

let b = Array.from(a)

let c = b.map((element)=> {return Number(element)})

let d = 0;

for(let i of c)
{
    d = d + i
}

console.log(d)