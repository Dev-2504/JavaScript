const weather_location_area = document.getElementById("weather_location_area")

// Location
const location_des = document.getElementById("location_des")
const location_feel = document.getElementById("location_feel")
const location_temp = document.getElementById("location_temp")
const location_temp2 = document.getElementById("location_temp2")
const location_Day = document.getElementById("location_Day")
const location_date = document.getElementById("location_date")
// Today's Highlight
const wind_speed = document.getElementById("wind_speed")
const humadity = document.getElementById("humadity")
const sunrise = document.getElementById("sunrise")
const sunset = document.getElementById("sunset")
const uv_index = document.getElementById("uv_index")
const visibility = document.getElementById("visibility")
// Other Countries
const other_countries_0_box = document.getElementById("other_countries_0_box")
const other_countries_1_box = document.getElementById("other_countries_1_box")
const other_countries_2_box = document.getElementById("other_countries_2_box")
// 10 Days Forecast
const forecast_first_day = document.getElementById("forecast_first_day")
const forecast_first_degree = document.getElementById("forecast_first_degree")

const forecast_second_day = document.getElementById("forecast_second_day")
const forecast_second_deg = document.getElementById("forecast_second_deg")

const forecast_third_day = document.getElementById("forecast_third_day")
const forecast_third_deg = document.getElementById("forecast_third_deg")


async function api(city)
{

    let response = await fetch(`https://wttr.in/${city}?format=j1`)
    let res = await response.json()


    // Main Work    
    weather_location_area.textContent = res.nearest_area[0].areaName[0].value + " ," +  res.nearest_area[0].country[0].value
    location_des.textContent = res.current_condition[0].weatherDesc[0].value
    let c = location_feel.textContent ="Feels Like " +  res.current_condition[0].FeelsLikeC + "°"
    location_temp.innerHTML = res.current_condition[0].FeelsLikeC + `<img src="./assets/Image/location_icon/fluent--temperature-degree-celsius-48-regular.svg" class="mt-[-2px]">`
    location_temp2.innerHTML = res.current_condition[0].temp_C + ` <img src="./assets/Image/location_icon/fluent--temperature-degree-celsius-48-regular (1).svg" alt="">`
    let date_obj_day = new Date().getDay()

    
    

    
    if(date_obj_day == 0)
        {
        location_Day.textContent = "Sunday"
    }else if(date_obj_day == 1)
        {
            location_Day.textContent = "Monday"
        }else if(date_obj_day == 2)
        {
            location_Day.textContent = "Tuesday"
        }else if(date_obj_day == 3)
            {
                location_Day.textContent = "Wednesday"
    }else if(date_obj_day == 4)
        {
        location_Day.textContent = "Thursday"
    }else if(date_obj_day == 5)
        {
        location_Day.textContent = "Friday"
    }else if(date_obj_day == 6)
        {
            location_Day.textContent = "Saturday"
        }



        let date_obj_date = new Date().getDate()
        let date_obj_month = new Date().getMonth()
        let date_obj_year = new Date().getFullYear()

        if(date_obj_month == 0)
        {
            let d =  location_date.textContent = date_obj_date + " " +  "Jan" + "," + date_obj_year
        }else if(date_obj_month == 1)
        {
            location_date.textContent = date_obj_date + " " +  "Feb" + "," + date_obj_year
        }else if(date_obj_month == 2)
        {
            location_date.textContent = date_obj_date + " " +  "Mar" + "," + date_obj_year
        }else if(date_obj_month == 3)
        {
            location_date.textContent = date_obj_date + " " +  "Apr" + "," + date_obj_year
        }else if(date_obj_month == 4)
        {
            location_date.textContent = date_obj_date + " " +  "May" + "," + date_obj_year
        }else if(date_obj_month == 5)
        {
            location_date.textContent = date_obj_date + " " +  "Jun" + "," + date_obj_year
        }else if(date_obj_month == 6)
        {
            location_date.textContent = date_obj_date + " " +  "July" + "," + date_obj_year
        }else if(date_obj_month == 7)
        {
            location_date.textContent = date_obj_date + " " +  "Aug" + "," + date_obj_year
        }else if(date_obj_month == 8)
        {
            location_date.textContent = date_obj_date + " " +  "Sept" + "," + date_obj_year
        }else if(date_obj_month == 9)
        {
            location_date.textContent = date_obj_date + " " +  "Oct" + "," + date_obj_year
        }else if(date_obj_month == 10)
        {
            location_date.textContent = date_obj_date + " " +  "Nov" + "," + date_obj_year
        }else if(date_obj_month == 11)
        {
            location_date.textContent = date_obj_date + " " +  "Des" + "," + date_obj_year
        }

    // Today's Highlights
    wind_speed.innerHTML = res.current_condition[0].windspeedKmph + "<span class = text-xs>km/h</span>"
    humadity.innerHTML = res.current_condition[0].humidity + "<span class= text-xs >%</span>"
    sunrise.textContent = res.weather[0].astronomy[0].sunrise
    sunset.textContent = res.weather[0].astronomy[0].sunset
    uv_index.innerHTML = res.current_condition[0].uvIndex + "<span class=text-xs>UV</span>"
    visibility.innerHTML = res.current_condition[0].visibility

    //10 Days Forecast

    forecast_first_degree.textContent = res.weather[0].avgtempC + "°"
    forecast_second_deg.textContent = res.weather[1].avgtempC + "°"
    forecast_third_deg.textContent = res.weather[2].avgtempC + "°"

    let a = new Date().getDay() + 1
    if(a == 0)
    {
        forecast_second_day.textContent = "Sunday"
    }else if(a == 1)
        {
        forecast_second_day.textContent = "Monday"
    }else if(a == 2)
        {
        forecast_second_day.textContent = "Tuesday"
    }else if(a == 3)
        {
        forecast_second_day.textContent = "Wednesday"
    }else if(a == 4)
        {
        forecast_second_day.textContent = "Thursday"
    }else if(a == 5)
        {
        forecast_second_day.textContent = "Friday"
    }else if(a == 6)
        {
        forecast_second_day.textContent = "Saturday"
    }


    let b = new Date().getDay() + 2
    if(a == 0)
    {
        forecast_third_day.textContent = "Sunday"
    }else if(b == 1)
        {
        forecast_third_day.textContent = "Monday"
    }else if(b == 2)
        {
        forecast_third_day.textContent = "Tuesday"
    }else if(b == 3)
        {
        forecast_third_day.textContent = "Wednesday"
    }else if(b == 4)
        {
        forecast_third_day.textContent = "Thursday"
    }else if(b == 5)
        {
        forecast_third_day.textContent = "Friday"
    }else if(b == 6)
        {
        forecast_third_day.textContent = "Saturday"
    }



    // Other Countries


}


const form = document.getElementById("form")

form.addEventListener("submit",function(event) {
    event.preventDefault();
    let search_btn = document.getElementById("search_btn")
    let city = search_btn.value
    api(city)
})







async function aemnam()
{
    let response
    let res
    let arr = ["new delhi","tokyo","Canberra"]
    arr.forEach(async (country,i) => {
        response = await fetch(`https://wttr.in/${country}?format=j1`)
        res = await response.json()
        console.log(res)
        if(i == 0)
        {
            other_countries_0_box.innerHTML = res.current_condition[0].FeelsLikeC + `°<span class="text-xl font-light">/${res.current_condition[0].temp_C}°</span>`
        }
        else if(i == 1)
            {
            other_countries_1_box.innerHTML = res.current_condition[0].FeelsLikeC + `°<span class="text-xl font-light">/${res.current_condition[0].temp_C}°</span>`
        }
        else if(i == 2)
            {
            other_countries_2_box.innerHTML = res.current_condition[0].FeelsLikeC + `°<span class="text-xl font-light">/${res.current_condition[0].temp_C}°</span>`
        }
    })
}

aemnam()



// https://wttr.in/jaipur?formate=j1