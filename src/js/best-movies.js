import refs from './refs'
import FetchMovie from './fetch-movie'

const API = new FetchMovie;

const response = API.fetchTrendingMovie().then(res=>res.data.results)


// function onSearch(e) {
//     const searchValue = e.target.value.trim();
//     // API.searchQuery = e.currentTarget.elements.searchQuery.value;
//     console.log(searchValue)
// }