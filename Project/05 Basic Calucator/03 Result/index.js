let math = document.getElementById("Maths");
let eng = document.getElementById("English")
let sci = document.getElementById("Science")
let soc_sci = document.getElementById("Social_Science")
let hin = document.getElementById("Hindi")
let com = document.getElementById("Computer")

let result = document.getElementById("total")
let peca = document.getElementById("pec")

function add()
{
    let matmar = Number(math.value)
    let engmar = Number(eng.value)
    let scimar = Number(sci.value)
    let soc_scimar = Number(soc_sci.value)
    let hinmar = Number(hin.value)
    let commar = Number(com.value)

    let obj = {
        Maths : matmar,
        English : engmar,
        Science : scimar,
        Social_Science : soc_scimar,
        Hindi : hinmar,
        Computer : commar
    }
    
    for(let i in obj)
    {
        if(obj[i] > 100)
            {
                main = prompt(`${i} is invalid value ${obj[i]} Enter a Valid Value`)
                obj[i] = Number(main)
                // console.log("obj[i]---",obj[i])
                // console.log("obj[i]---",i)
                document.getElementById(i).value = Number(main)
            }
    }


    // let ans = matmar + engmar + scimar + soc_scimar + hinmar + commar

    let ans = 0;
    let per

    for(let f in obj)
    {
        ans = ans +  obj[f]
    }

    for(let e in obj)
    {
        per = ans / 6
    }

    console.log("Maths -- ",matmar)
    console.log("English -- ",engmar)
    console.log("Science -- ",scimar)
    console.log("Social_Science -- ",soc_scimar)
    console.log("Hindi -- ",hinmar)
    console.log("Computer -- ",commar)
    console.log(ans)
    result.textContent = ans;
    peca.textContent = per;
}