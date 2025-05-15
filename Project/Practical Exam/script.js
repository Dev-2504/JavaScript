let name = document.querySelector("#name")
let subject = document.querySelector("#subject")
let age = document.querySelector("#age")
let btn = document.querySelector("#btn")
let image = document.getElementById("image")
let list = document.querySelector("#li")

let editIndex = null

btn.addEventListener("click",()=>{

    // Local Storage Set
    let oldRecord = JSON.parse(localStorage.getItem("students")) || [];
    if(editIndex == null){
        let obj = {
            id : Date.now(),
            name : name.value,
            subject : subject.value,
            age : age.value,
            image : image.value
        };
        oldRecord = [...oldRecord,obj];
    } else{
        oldRecord.forEach((item)=>{
            if(item.id == editIndex){
                item.name = name.value;
                item.subject = subject.value;
                item.age = age.value;
                item.image = image.value;
            } else{
                item
            }
        });
    }

    console.log(name.value)
    console.log(subject.value)
    console.log(age.value)
    console.log(image.value)
    
    localStorage.setItem("students",JSON.stringify(oldRecord));

    name.value = "";
    subject.value = "";
    age.value = "";
    editIndex = null;
    btn.innerHTML = "Add Data";

    Data();
})



function Data()
{
    // Displaying Data Function
    let allData = JSON.parse(localStorage.getItem("students"))
    list.innerHTML = "";

    allData.forEach((e,i) => {

        //Creating Element
        let li1 = document.createElement("li")
        let li2 = document.createElement("li")
        let li3 = document.createElement("li")
        let li4 = document.createElement("li")
        let image_create = document.createElement("img")
        let del = document.createElement("button")
        let edit = document.createElement("button")

        image_create.setAttribute("src",e.image)
        image_create.setAttribute("height","100px")
        image_create.setAttribute("width","100px")
        del.setAttribute("data-id",e.id)
        edit.setAttribute("data-id",e.id)

        
        li1.innerHTML = i + 1
        li2.innerHTML = e.name
        li3.innerHTML = e.subject
        li4.innerHTML = e.age
        del.textContent = "Delete"
        edit.textContent = "Edit"
        del.classList = "delete-btn"
        edit.classList = "edit-btn"
        
        list.append(li1)
        list.append(li2)
        list.append(li3)
        list.append(li4)
        list.append(del)
        list.append(edit)
        list.append(image_create)
    })


    //Deleting Button Work

    let deleteBtns = document.querySelectorAll(".delete-btn")

    deleteBtns.forEach((btn)=>{
        btn.addEventListener("click",()=>{
            let allData = JSON.parse(localStorage.getItem("students"));
            let btnId = btn.getAttribute("data-id");

            let newRecord = allData.filter(item => item.id != btnId);
            
            localStorage.setItem("students",JSON.stringify(newRecord));
            Data();
        });
    });


    // Editing Button Work

    let editBtns = document.querySelectorAll(".edit-btn");

    editBtns.forEach((btn)=>{
        btn.addEventListener("click",()=>{
            let allData = JSON.parse(localStorage.getItem("students"));
            let btnId = btn.getAttribute("data-id");

            let singleData = allData.find(item => item.id == btnId);
            name.value = singleData.name;
            subject.value = singleData.subject;
            age.value = singleData.age;
            document.querySelector("#btn").innerHTML = "Update Data";
            editIndex = btnId;
        });
    });
}


Data()

