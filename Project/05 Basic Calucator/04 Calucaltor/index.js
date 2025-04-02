let first = document.getElementById("first")
let second = document.getElementById("second")
let result = document.getElementById("result")

let ans = 0;

function add()
{
    result.textContent = `${parseInt(first.value)} + ${parseInt(second.value)} = ${parseInt(first.value) + parseInt(second.value)}`
}
function suc()
{
    result.textContent = `${parseInt(first.value)} - ${parseInt(second.value)} = ${parseInt(first.value) - parseInt(second.value)}`
}
function mul()
{
   result.textContent = `${parseInt(first.value)} * ${parseInt(second.value)} = ${parseInt(first.value) * parseInt(second.value)}`
}
function div()
{
    result.textContent = `${parseInt(first.value)} / ${parseInt(second.value)} = ${parseInt(first.value) / parseInt(second.value)}`
}