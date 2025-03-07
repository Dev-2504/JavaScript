let num1 = prompt("Enter a First Number : ")
let num2 = prompt("Enter a Second Number : ")
let num3 = prompt("Enter a Third Number : ")


// Maximum Number Program
if(num1 >= num2)
{
    if(num1 >= num3)
    {
        console.log("First")
    }
    else {
        console.log("Third")
    }
}
else {
    if(num2 >= num3)
    {
        console.log("Second")
    }
    else {
        console.log("Third")
    }
}

// Minimum Numnber Program
if(num1 <= num2)
    {
        if(num1 <= num3)
        {
            console.log("First")
        }
        else {
            console.log("Third")
        }
    }
    else {
        if(num2 <= num3)
        {
            console.log("Second")
        }
        else {
            console.log("Third")
        }
    }