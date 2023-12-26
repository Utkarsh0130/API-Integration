const cont = document.querySelector('.container')

function fetchApiData() {
    const url = 'https://restcountries.com/v3.1/all'
    fetch(url)
        .then(response => {
            return response.json();
        }).then(data => {
            console.log(data);
            createCards(data)
        })
}


fetchApiData();

function createCards(data){

    data.forEach((coin)=>{
       const div = document.createElement('div') 

       div.classList.add('card')

       const img = document.createElement('img')
       img.src= coin.flags.png

       const heading = document.createElement('h2')
       heading.innerHTML = coin.name.common

       const para = document.createElement('h4')
       para.innerHTML = coin.continents;

       div.appendChild(img)
       div.appendChild(heading)
       div.appendChild(para)

       cont.appendChild(div)
    })
}