import '../main_page/firebase';
import '../../css/main.min.css'
import { header } from './header';
import axios from "axios" ;
// import { log_sign } from './log_sign';
// import { about_movie } from './about_movie';
import { movies } from './movies';
// import { sliders } from './sliders';
// import { favorite_btn } from './favorite_btn';
// import { see_more_section } from './see_more_section';

window.addEventListener('DOMContentLoaded' , () => {

    header()
    // log_sign()
    // about_movie()
    movies('https://imdb-api.com/en/API/MostPopularMovies/k_7xs694cx' ,'.most_popular div.movie_list' , 'https://imdb-api.com/en/API/ComingSoon/k_7xs694cx' , ".new_arrival  div.movie_list" , '.exclusive_videos' , '.movie_content')
    // sliders()
    // favorite_btn('https://imdb-api.com/en/API/MostPopularMovies/k_7xs694cx')
    // see_more_section('https://imdb-api.com/en/API/MostPopularMovies/k_7xs694cx' , '.see_more_section .movie_full' , 'https://imdb-api.com/en/API/ComingSoon/k_7xs694cx')
    import('./index').then(res => res.log_in_sign_up())

})
window.addEventListener('load' , () => {
     // import("./header").then(res => res.header())
     import('./log_sign').then(res => res.log_sign())
     import("./about_movie").then(res => res.about_movie())
     // import('./movies').then(res => res.movies('https://imdb-api.com/en/API/MostPopularMovies/k_7xs694cx' ,'.most_popular div.movie_list' , 'https://imdb-api.com/en/API/ComingSoon/k_7xs694cx' , ".new_arrival  div.movie_list" , '.exclusive_videos' , '.movie_content'))
     import('./sliders').then((res) => res.sliders())
     import('./favorite_btn').then(res => res.favorite_btn('https://imdb-api.com/en/API/MostPopularMovies/k_7xs694cx'))
     import('./see_more_section').then(res => res.see_more_section('https://imdb-api.com/en/API/MostPopularMovies/k_7xs694cx' , '.see_more_section .movie_full' , 'https://imdb-api.com/en/API/ComingSoon/k_7xs694cx'))
 
     import('firebase/auth').then(({ getAuth, onAuthStateChanged }) => {
             let auth = getAuth()

            const featured_movie_list = document.querySelector('section.featured_movie .movie_list') ,
             featured_movie = document.querySelector('.featured_movie')

             onAuthStateChanged( auth , function(user) {
                 if (user) {
                  import('firebase/database').then(({ child, get, getDatabase, ref}) => {
                     const db = getDatabase() 
                    //  featured_movie_list = document.querySelector('section.featured_movie .movie_list') ,
                    //  featured_movie = document.querySelector('.featured_movie')
             
                     get(child(ref(db) , 'favorite/' + user.uid)).then(res => { 
                         if(res.val()) {
                             let movies_info =  res.val().movies_info
                             movies_info.length > 0 ?   featured_movie.style.display = 'block'  :      featured_movie.style.display = 'none' 
                             movies_info.forEach(async item_1 =>  {
                             let  currentClass = item_1.clazz ? 'favorite_toggle_btn favorite_toggle_btn_favorite' : 'favorite_toggle_btn' 
                                 if(featured_movie_list.innerHTML !== '') {
                                     featured_movie_list.innerHTML = ''
                                 }
                                 const data = await axios.get(`http://www.omdbapi.com/?apikey=8d9cfe3d&i=${item_1.id}`)
             
                                 document.querySelectorAll('.movie_list_item').forEach(item_2 => {
                                     if(item_2.getAttribute('data-id') === item_1.id) {
                                         item_2.querySelector('.favorite_toggle_btn').classList.add('favorite_toggle_btn_favorite')
                                     }
                                 })
                 
                                 featured_movie_list.innerHTML += 
                                             `<div class="movie_list_item" data-id="${item_1.id}">
                                                 <div class="photo_wrapper">
                                                     <img loading='lazy' src='${ 'https://res.cloudinary.com/dfohwxch2//image/fetch/q_80,f_auto/' + data.data.Poster.slice(0 , -3) + 'webp' }' alt="movie photo">
                                                     <div class='${currentClass}'></div>
                                                 </div>
                                 
                                                 <div class="year">${data.data.Year}</div>
                                                 <div class="title">${data.data.Title}</div>
                                                 <div class="score">
                                                     <div class="imdb_score"> <img  class="imdb" alt="imdb">${data.data.imdbRating ? data.data.imdbRating : 0 }/ 100</div>
                                                 </div>
                                                 <div class="genre">${data.data.Genre}</div>
                                             </div>`                   
                             })
                         } 
                     }) 
                 })
                 } else {   
                    featured_movie_list.innerHTML = ''
                    featured_movie.style.display = 'none' 
                 }
             });
 })
})
const input = document.querySelector('.search input')

input.addEventListener('focus' , () => {
    import('./search_input').then(res => res.search_btn())
})



// lazyframe(".player");

// lazyframe('.video_wrapper', {
//     debounce: 250,
//     lazyload: true,
//     autoplay: true,
  
//     // Callbacks
//     onLoad: (lazyframe) => console.log(lazyframe),
//     onAppend: (iframe) => console.log(iframe),
//     onThumbnailLoad: (img) => console.log(img),
//   });


