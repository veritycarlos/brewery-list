const BASE_URL = "https://api.openbrewerydb.org"

window.addEventListener('DOMContentLoaded', () =>{
    getBreweries()
    document.getElementById("breweries").addEventListener('click', getBreweries)
})


function getBreweries() { 
    const ul = document.getElementById("breweries-list")
    const info = document.getElementById('info')
    info.innerText = ""
    ul.innerText = " "
    fetch(BASE_URL + '/breweries') 
    .then(res => res.json()) 
    .then(data => {
        data.forEach(brewery => {
            ul.innerHTML += `
                <li><a href="#" data-id="${brewery.id}">${brewery.name}</a></li>
            `        
        })
        attachClicksToLinks()
    })
}

const attachClicksToLinks = () =>{
    const breweries = document.querySelectorAll('a')
    breweries.forEach((brewery) =>{
        brewery.addEventListener('click', displayBrewery)
    })
}



const displayBrewery = (e) => {
    console.log(e.target.dataset.id)
    const info = document.getElementById('info')
    const ul = document.getElementById("breweries-list")
    ul.innerText = ''
    fetch(BASE_URL + `/breweries/${e.target.dataset.id}`)
    .then(res => res.json())
    .then(data =>{
        console.log(data)

        const phoneNotAvail = () => {
            if (data.phone === null) {
                result = "not listed"
            } else {
            result = `${data.phone}`
            }
            return result
        }

        const urlNotListed = () => {
            if (data.website_url === null) {
                result = "not listed"
            } else {
            result = `${data.website_url}`
            }
            return result
        }

        info.innerHTML = 
        `<h2>${data.name}</h2>
        <h3>State:</h3>
        <p>${data.state}</p>
        <h3>City:</h3>
        <p>${data.city}</p>
        <h3>Type:</h3>
        <p>${data.brewery_type}</p>
        <h3>Phone:</h3>
        <p>${phoneNotAvail()}</p>
        <h3>Website:</h3>
        <p>${urlNotListed()}</p>`
    })
}


// <p>${data.phone}</p>
// <p>${data.website_url}</p>//