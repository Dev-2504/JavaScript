let salary = prompt("Enter your Salary : ")
let newSalary;

if(salary <= 50000)
{
    console.log("No Tax")
    newSalary = salary;
    console.log(`Salary : ${newSalary}`)
}
else if(salary >= 50001 && salary <= 100000)
{
    console.log("10% Tax")
    newSalary = salary - ((salary/100) * 10)
    console.log(`Salary : ${newSalary}`)
}
else if(salary >= 100001)
{
    console.log("20% Tax")
    newSalary = salary - ((salary/100) * 20)
    console.log(`Salary : ${newSalary}`)
}
else {
    console.log("Enter a Valid Salary")
}