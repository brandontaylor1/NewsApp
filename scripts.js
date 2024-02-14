const { hrtime } = require("process");

const API_KEY = process.env.NEWS_API_KEY
const url = `https://newsapi.org/v2/everything?q=tesla&from=2024-01-14&sortBy=publishedAt&apiKey=${API_KEY}`

async function fetchNews() {
    try {
        let response = await fetch(url)
        let data = await response.json()
        console.log(data);
        displayNews(data.articles)

    } catch(error) {
        console.error("Houston...", error )
    }
}

fetchNews() 


function displayNews(articles) {
    const newsDIV = document.getElementById('news')
    for (const article of articles) {

        // const newCard = 
        // ` <div class="card" style="width: 18rem;">
        //     <img src=${article.urlToImage} class="card-img-top" alt="...">
        //     <div class="card-body">
        //         ${article.title}
        //     <p class="card-text">${article.description}</p>
        //     </div>
        // </div>`
        
        const articleDiv = document.createElement('div');
        const title = document.createElement('h3');
        const body = document.createElement('p')
        const underline = document.createElement('hr')
        const img = document.createElement('img')
        const link = document.createElement('a')

        
        img.src = article.urlToImage
        img.width = 500;
        title.textContent = article.title;
        body.textContent = article.description;
        link.href = url
        
        
        articleDiv.appendChild(img)
        articleDiv.appendChild(title);
        articleDiv.appendChild(body);
        articleDiv.appendChild(link);
        articleDiv.appendChild(underline);

        newsDIV.appendChild(articleDiv);
        
    }
}