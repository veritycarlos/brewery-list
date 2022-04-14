const BASE_URL = "https://api.openbrewerydb.org"

window.addEventListener('DOMContentLoaded', () =>{
    getCoinNameValues()
})

function getCoinNameValues() { 
    const ul = document.getElementById("breweries-list")
    fetch(BASE_URL + '/breweries') 
    .then(res => res.json()) 
    .then(data => {
        data.forEach(breweries => {
            ul.innerHTML += `
                <li><a href="#">${breweries.name}</a></li>
            `
        })
    })
}

