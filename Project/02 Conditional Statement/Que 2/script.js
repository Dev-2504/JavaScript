let unit = prompt("Enter a Unit : ")
let price;
const fixedCharge = 50;

if(unit <= 100)
{
    price = 5
    console.log(`Unit : ${unit}`)
    console.log(`Price/unit : ${price}`)
    console.log(`Total Bill : ${unit * price + fixedCharge}`)
}
else if(unit >= 101 && unit <= 300)
{
    price = 7
    console.log(`Unit : ${unit}`)
    console.log(`Price/unit : ${price}`)
    console.log(`Total Bill : ${unit * price + fixedCharge}`)
}
else  {
    price = 10
    console.log(`Unit : ${unit}`)
    console.log(`Price/unit : ${price}`)
    console.log(`Total Bill : ${unit * price + fixedCharge}`)
}