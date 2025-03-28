let num = true;
function Hello()
{
    let icon = document.getElementById("abc")
    let secondicon = document.getElementById("d")
    if(num)
    {
        let hello = document.getElementById("MainDiv")
        hello.style.transform = "translatey(0px)"
        icon.style.display = "block"
        secondicon.style.display = "none"
        num = false;
    }
    else {
        let hello = document.getElementById("MainDiv")
        hello.style.transform = "translatey(-767px)"
        icon.style.display = "none"
        secondicon.style.display = "block"
        num = true;
    }
}