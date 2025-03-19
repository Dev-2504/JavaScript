// Factor Program
let a = Number(prompt("Enter a Number : "))

for(let i = 1; i <= a; i++)
{
    if(a % i == 0)
    {
        console.log(`${a} Factor is : ${i}`)
    }
}