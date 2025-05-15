const image = document.getElementById("image")
const title = document.getElementById("title")
const imdb_Rating = document.getElementById("imdb_Rating")
const des = document.getElementById("des")
const director = document.getElementById("director")
const writer = document.getElementById("writer")


async function APIData()
{
    const response = await fetch("https://www.omdbapi.com/?i=tt3896198&apikey=2f95b4c8")
    const res = await response.json()

    image.src = res.Poster
    title.textContent = res.Title
    imdb_Rating.textContent = res.imdbRating + " / 10"
    des.textContent = res.Plot
    director.textContent = res.Director
    writer.textContent = res.Writer
}