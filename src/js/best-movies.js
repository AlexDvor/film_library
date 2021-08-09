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
    response.map(item=>getShortsDate(item))
}


function getShortsDate(obj) {
    const yearRef = document.querySelector(`[data-year-id="${obj.id}"]`);
    const yearValue = yearRef.textContent;
    yearRef.textContent = `| ${yearValue.slice(0, 4)}`;
}

