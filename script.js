const BASE_URL = "https://api.openbrewerydb.org"

window.addEventListener('DOMContentLoaded', () =>{
    getCoinNameValues()
})

function getCoinNameValues() { 
    const ul = document.getElementById("breweries-list")
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
    ul.innerHTML = ''
    fetch(BASE_URL + `/breweries/${e.target.dataset.id}`)
    .then(res => res.json())
    .then(data =>{
        console.log(data)
        info.innerHTML = `<h1>${data.name}</h1>
        <h3>City:</h3>
        <p>${data.city}</p>
        <h3>Type:</h3>
        <p>${data.brewery_type}</p>
        <h3>Phone:</h3>
        <p>${data.phone}</p>
        <h3>URL</h3>
        <p>${data.website_url}</p>`
    })
}