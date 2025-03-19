// Factorial Program
let n = Number(prompt("Enter a Number : "))
let a = 1;

for(let i = 1; i <= n; i++)
{
    a = a * i
}
console.log(`The Factorial of ${n} is : ${a}`)