let n = Number(prompt("Enter a Number : "))

let sum = 0;

while(n !== 0)
{
    let last = n % 10;
    sum = sum + last;
    
    n = Math.floor(n / 10)
}

console.log(sum)