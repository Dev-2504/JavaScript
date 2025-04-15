let name = document.getElementById("name")
let password = document.getElementById("password")
let email = document.getElementById("email")

// ✅ Name Validation Regex
const nameRegex = /^[A-Za-z ]{2,}$/;

// ✅ Email Validation Regex
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// ✅ Password Validation Regex (Min 8 chars, 1 upper, 1 lower, 1 number, 1 special char)
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


function hello(event)
{
    event.preventDefault();

    if(!nameRegex.test(name.value))
    {
        return alert("Name invalid")
    }

    if(!passwordRegex.test(password.value))
        {
            return alert("Password invalid")
        }

        if(!emailRegex.test(email.value))
            {
                return alert("Email invalid")
            }
}