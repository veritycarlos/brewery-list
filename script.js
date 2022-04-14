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