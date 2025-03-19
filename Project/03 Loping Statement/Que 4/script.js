// Sum of First and Last digit
let a = prompt("Enter a Number : ")

let b = Array.from(a)

let c = b.map((element)=> {return Number(element)})

let d = 0;

for(let i = 1; i <= c.length; i++)
{   
    if(i == 1 || i == c.length)
    {
        d = d + i
    }
}
console.log(d)