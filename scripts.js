const API_KEY = process.env.NEWS_API_KEY
const topHeadlinesURL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`

let urlString = ""

const input = document.getElementById('searchBar')
const searchBtn = document.getElementById('searchBtn')
searchBtn.addEventListener('click', () => {
    console.log(input.value)
})

const buttons = document.getElementsByClassName('categoryBtn')
const buttonPressed = event => {
    urlString = event.target.id
    console.log(urlString);
}

for(const button of buttons) {
    button.addEventListener('click', event => {
        buttonPressed(event);
        fetchSources(urlString); 

    })
}

async function fetchTopHeadlines() {
    try {
        let response = await fetch(topHeadlinesURL);
        let data = await response.json();
        console.log(data)
        displayArticles(data.articles)

    } catch (error) {
        console.error("Houston...", error) 
    }
}

fetchTopHeadlines(); 

function displayArticles(articles) {
    const articlesContainer = document.getElementById('articlesContainer');
    
    
    for (const article of articles) {
        
        const articlesDiv = document.createElement('div')
        articlesDiv.setAttribute("id", 'articlesDiv')
        
        
        const title = document.createElement('h3')
        title.setAttribute('id', 'title')
        title.textContent = article.title;

        const body = document.createElement('p')
        body.setAttribute('id','body')
        body.textContent = article.description
        
        
        const newsImage = document.createElement('img')
        newsImage.setAttribute('id','newsImage')
        newsImage.src = article.urlToImage;
        
        const link = document.createElement('a')
        link.setAttribute('id', 'articleLink')
        link.href = article.url
        
        
        if(!newsImage) {
            newsImage.alt = "No Image Available"
            continue
        } else {
            newsImage.src = article.urlToImage;
        }
        
        
        articlesDiv.appendChild(newsImage)
        articlesDiv.appendChild(title);
        articlesDiv.appendChild(body);
        articlesDiv.appendChild(link);
        
        articlesContainer.appendChild(articlesDiv);
    }
    
}


async function fetchSources() {
    try {
        let response = await fetch(`https://newsapi.org/v2/top-headlines/sources?category=${urlString}&apiKey=${API_KEY}`)
        let data = await response.json()
        console.log(data);
        displaySources(data.sources)
    
    } catch(error) {
        console.error("Houston...", error)
        }
    }


function displaySources(sources) {
    const articlesContainer = document.getElementById('articlesContainer');
    
    
    for (const source of sources) {
        
        const articlesDiv = document.createElement('div')
        articlesDiv.setAttribute("id", 'articlesDiv')


        const title = document.createElement('h1')
        title.setAttribute('id', 'title')
        title.textContent = source.name;
        
        const body = document.createElement('p')
        body.setAttribute('id','body')
        body.textContent = source.description


        const newsImage = document.createElement('img')
        newsImage.setAttribute('id','newsImage')
        newsImage.src = source.urlToImage;

        const link = document.createElement('a')
        link.setAttribute('id', 'articleLink')
        link.href = source.url
        
        
        if(!newsImage) {
            newsImage.alt = "No Image Available"
            continue
        } else {
            newsImage.src = source.urlToImage;
        }

        // articlesContainer.remove(articlesDiv); 
                  
        articlesDiv.appendChild(newsImage)
        articlesDiv.appendChild(title);
        articlesDiv.appendChild(body);
        articlesDiv.appendChild(link);

        articlesContainer.appendChild(articlesDiv);
    }
    
}

function clearCards() {
    articlesContainer.re
}