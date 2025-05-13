let body = document.getElementById("bd")

async function API()
{
    let response = await fetch("https://dog.ceo/api/breeds/image/random")
    let res = await response.json()

    console.log(res)

    let img = document.createElement("img")
    img.src = res.message
    img.style.width = "30%"

    body.append(img)
}

API()