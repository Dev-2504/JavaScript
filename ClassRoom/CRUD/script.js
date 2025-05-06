let name = document.getElementById("name")
let age = document.getElementById("age")
let city = document.getElementById("city")
let btn = document.getElementById("btn")
let table = document.getElementById("table")

let arr = []

const Read = () => {
    // console.log("Hello")
    let tr1 = document.createElement("tr")
    let tr2 = document.createElement("td")
    let tr3 = document.createElement("td")
    let tr4 = document.createElement("td")
    let tr5 = document.createElement("td")
    let tr6 = document.createElement("td")
    let editbtn = document.createElement("button")
    let deletebtn = document.createElement("button")

    table.append(tr1)
    tr1.append(tr2)
    tr1.append(tr3)
    tr1.append(tr4)
    tr1.append(tr5)
    tr1.append(tr6)
    tr5.append(editbtn)
    tr6.append(deletebtn)

    tr2.innerText = name.value
    tr3.innerText = age.value
    tr4.innerText = city.value
    editbtn.innerText = "Edit"
    deletebtn.innerText = "Delete"

    
    obj = {
        id:Date.now(),
        fname : name.value,
        aage : age.value,
        ccity : name.value
    }

    editbtn.setAttribute("id",obj.id)
    deletebtn.setAttribute("id",obj.id)
    
    name.value = ""
    age.value = ""
    city.value = ""


    arr.push(obj)
    console.log(arr)
    
    
    
    // Edit Functionality
    editbtn.addEventListener("click",() => {
        console.log(editbtn)
    })


    
    // Delete Functionality
    deletebtn.addEventListener("click",deletefun())
}

// Delete Functionality
function deletefun()
{
    {
        let btnid = deletebtn.getAttribute("id")
        console.log(btnid)
        arr.forEach((element,index) => {
            if(btnid == element.id)
                {
                console.log(element.id)
                name.value = ""
                age.value = ""
                city.value = ""    
                
                tr2.innerText = name.value
                tr3.innerText = age.value
                tr4.innerText = city.value

                
                
                tr2.remove()
                tr3.remove()
                tr4.remove()
                tr5.remove()
                tr5.remove()
                tr6.remove()
                arr.splice(index,1)
                console.log(arr)
            }
        })  
    }
}