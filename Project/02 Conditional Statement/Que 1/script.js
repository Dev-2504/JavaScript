let marks = prompt("Enter a Marks : ")

if(marks >= 90 && marks <= 100)
{
    console.log("Grade : A+")
}
else if(marks >= 80 && marks <= 89)
{
    console.log("Grade : A")
}
else if(marks >= 70 && marks <= 79)
{
    console.log("Grade : B")
}
else if(marks >= 60 && marks <= 69)
{
    console.log("Grade : C")
}
else if(marks >= 50 && marks <= 59)
{
    console.log("Grade : D")
}
else if(marks < 50)
{
    console.log("Sorry You are Fail")
}
else {
    console.log("Please Enter a Valid Value")
}