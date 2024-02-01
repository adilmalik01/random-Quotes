let nextBtn = document.querySelector("#next")
let myContent = document.querySelector(".content")
let authorName = document.querySelector(".authorName")
let author_div = document.querySelector(".author-div")


let apiUrl = 'https://api.quotable.io/random'

let isLoading = false

console.log(isLoading)

const nextQuote = async (url) => {
    try {
        isLoading = true
        const response = await axios.get(url)
        isLoading = false
        let { content, author } = response.data
        showQuotes(content, author)
    } catch (e) {
        console.log(e);
    }

}
nextQuote(apiUrl)

isLoading == true ? myContent.innerHTML = 'Loading..........!' : null

if (myContent.innerHTML == 'Loading..........!') {
    myContent.classList.add("color")
    console.log('add',myContent.innerHTML);
} else {
    myContent.classList.remove("color")
    console.log('remove')
}


function showQuotes(content, author) {
    myContent.innerHTML = `Author Name:${content}`
    authorName.innerHTML = author
}


const reload = () => {
    window.location.reload()
}
nextBtn.addEventListener("click", reload)

