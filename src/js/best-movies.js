import refs from './refs'
import FetchMovie from './fetch-movie'
import movieCardTmp from '../templates/cards.hbs'
// console.log(movieCardTmp)

const API = new FetchMovie;

API.fetchTrendingMovie('day').then(getMovieCards)

function getMovieCards(res) {
    const response = res.data.results;
    const result = movieCardTmp(response);
    console.log(response)
    refs.movieCardsList.insertAdjacentHTML('beforeend', result);
    response.map(item=>getMovieData(item))
    

}


function getMovieData(obj) {
    const yearRef = document.querySelector(`[data-year-id="${obj.id}"]`);
    const yearVal = yearRef.textContent;
    // const a = obj.map(item => item.release_date).map(data => data.slice(0, 4))
   yearRef.textContent = `| ${yearVal.slice(0, 4)}`;
    

}

// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// const a = clients.slice(0,3).join(", ")
// console.log(a)