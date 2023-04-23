// Variables declaration
const generalBtn = document.getElementById("general");
const businessBtn = document.getElementById("business");
const sportsBtn = document.getElementById("sports");
const technologyBtn = document.getElementById("technology");
const entertainmentBtn = document.getElementById("entertainment");
const searchBtn = document.getElementById("search");
const healthBtn = document.getElementById("health");

const newsQuery = document.getElementById("newsQuery");
const newsType = document.getElementById("newsType");
const newsdetails = document.getElementById("newsdetails");


// Array for feath news
var newsDataArr = [];


// Apis Section
const API_KEY = "7d16c81d827648fa9162a3376f94cca9";
const HEADLINES_NEWS = "https://newsapi.org/v2/top-headlines?country=in&apiKey=7d16c81d827648fa9162a3376f94cca9";
const GENERAL_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=7d16c81d827648fa9162a3376f94cca9";
const BUSINESS_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=7d16c81d827648fa9162a3376f94cca9";
const SPORTS_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=7d16c81d827648fa9162a3376f94cca9";
const TECHNOLOGY_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=7d16c81d827648fa9162a3376f94cca9";
const ENTERTAINMENT_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=7d16c81d827648fa9162a3376f94cca9";
const HEALTH_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=7d16c81d827648fa9162a3376f94cca9";

const SEARCH_NEWS = "https://newsapi.org/v2/everything?q=";
window.onload=function(){
    newsType.innerHTML = "<h4>Headlines</h4>";
    fetchHeadlines();
};



generalBtn.addEventListener("click", function () {
    newsType.innerHTML = "<h4>Headlines</h4>";

    fetchGeneralNews();
});
businessBtn.addEventListener("click", function () {
    newsType.innerHTML = "<h4>Headlines</h4>";
    fetchBusinessNews();


});
sportsBtn.addEventListener("click", function () {
    newsType.innerHTML = "<h4>Headlines</h4>";

    fetchSportsNews();

});
technologyBtn.addEventListener("click", function () {
    newsType.innerHTML = "<h4>Headlines</h4>";

    fetchTechnologyNews();

});
entertainmentBtn.addEventListener("click", function () {
    newsType.innerHTML = "<h4>Headlines</h4>";

    fetchEntertainmentNews();


});
healthBtn.addEventListener("click", function () {
    newsType.innerHTML = "<h4>Headlines</h4>";

    fetchHealthNews();


});
searchBtn.addEventListener("click", function () {
    newsType.innerHTML = "<h4>Search : "+newsQuery.value+"</h4>";

    fetchQueryNews();


});

const fetchGeneralNews = async () => {
    const response = await fetch(GENERAL_NEWS + API_KEY);
    newsDataArr = [];
    if (response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        console.log(myJson);
        newsDataArr = myJson.articles;
    }
    else {
        // handle errors
        console.log(response.status, response.statusText);
    }

    displayNews();
}
const fetchBusinessNews = async () => {
    const response = await fetch(BUSINESS_NEWS + API_KEY);
    newsDataArr = [];
    if (response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        console.log(myJson);
        newsDataArr = myJson.articles;
    }
    else {
        // handle errors
        console.log(response.status, response.statusText);

    }

    displayNews();
}
const fetchSportsNews = async () => {
    const response = await fetch(SPORTS_NEWS + API_KEY);
    newsDataArr = [];
    if (response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        console.log(myJson);
        newsDataArr = myJson.articles;
    }
    else {
        // handle errors
        console.log(response.status, response.statusText);

    }

    displayNews();
}
const fetchTechnologyNews = async () => {
    const response = await fetch(TECHNOLOGY_NEWS + API_KEY);
    newsDataArr = [];
    if (response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        console.log(myJson);
        newsDataArr = myJson.articles;
    }
    else {
        // handle errors
        console.log(response.status, response.statusText);

    }

    displayNews();
}
const fetchEntertainmentNews = async () => {
    const response = await fetch(TECHNOLOGY_NEWS + API_KEY);
    newsDataArr = [];
    if (response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        console.log(myJson);
        newsDataArr = myJson.articles;
    }
    else {
        // handle errors
        console.log(response.status, response.statusText);

    }

    displayNews();
}
const fetchHealthNews = async () => {
    const response = await fetch(HEALTH_NEWS + API_KEY);
    newsDataArr = [];
    if (response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        console.log(myJson);
        newsDataArr = myJson.articles;
    }
    else {
        // handle errors
        console.log(response.status, response.statusText);

    }

    displayNews();
}
const fetchQueryNews = async () => {
    if (newsQuery.value == null) {
        return;
    }
    const response = await fetch(SEARCH_NEWS + encodeURIComponent(newsQuery.value) + "&apiKey=" + API_KEY);
    newsDataArr = [];
    if (response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        console.log(myJson);
        newsDataArr = myJson.articles;
    }
    else {
        // handle errors
        console.log(response.status, response.statusText);

    }

    displayNews();
}


function displayNews() {

    newsdetails.innerHTML = "";

    // if(newsDataArr.length == 0) {
    //     newsdetails.innerHTML = "<h5>No data found.</h5>"
    //     return;
    // }

    newsDataArr.forEach(news => {

        var date = news.publishedAt.split("T");

        var col = document.createElement('div');
        col.className="col-sm-12 col-md-4 col-lg-3 p-2 card";

        var card = document.createElement('div');
        card.className = "p-2";

        var image = document.createElement('img');
        image.setAttribute("height","matchparent");
        image.setAttribute("width","100%");
        image.src=news.urlToImage;

        var cardBody = document.createElement('div');

        var newsHeading = document.createElement('h5');
        newsHeading.className = "card-title";
        newsHeading.innerHTML = news.title;

        var dateHeading = document.createElement('h6');
        dateHeading.className = "text-primary";
        dateHeading.innerHTML = date[0];

        var discription = document.createElement('p');
        discription.className="text-muted";
        discription.innerHTML = news.description;

        var link = document.createElement('a');
        link.className="btn btn-dark";
        link.setAttribute("target", "_blank");
        link.href = news.url;
        link.innerHTML="Read more";

        cardBody.appendChild(newsHeading);
        cardBody.appendChild(dateHeading);
        cardBody.appendChild(discription);
        cardBody.appendChild(link);

        card.appendChild(image);
        card.appendChild(cardBody);

        col.appendChild(card);

        newsdetails.appendChild(col);
    });

}
