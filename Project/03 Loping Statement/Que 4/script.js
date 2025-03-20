let n = Number(prompt("Enter a Number : "))

let last = n % 10;

let e = n

let sum = 0;

while(e >= 10)
{
    e = Math.floor(e /= 10)
}

let first = e;
sum = first + last;
console.log(sum)