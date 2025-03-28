let inp1 = document.getElementById("inp1")
let inp2 = document.getElementById("inp2")
let result = document.getElementById("result")

function add()
{
    result.textContent = Number(inp1.value) + Number(inp2.value)
}

function subst()
{
    result.textContent = Number(inp1.value) - Number(inp2.value)
}

function mul()
{ 
    result.textContent = Number(inp1.value) * Number(inp2.value)
}

function div()
{
    result.textContent = Number(inp1.value) / Number(inp2.value)
}