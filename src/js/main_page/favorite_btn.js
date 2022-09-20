import axios from "axios"
import { getAuth } from "firebase/auth"
import { getDatabase, ref, update , get} from "firebase/database";

export const favorite_btn = (url_1) => {
    let  movie_sections = document.querySelectorAll('section') ,
    auth = getAuth() ,
    featured_movie_list = document.querySelector('section.featured_movie .movie_list') ,
    featured_movie = document.querySelector('.featured_movie') ,
    db = getDatabase()
    let movies_info = [] 

    const f_btn_ex  = (item_id , movie_sections) => {
        movie_sections.forEach((item , index) => {
            if(index != 0 && index != 2 && index!= 4)
            item.querySelectorAll('.movie_list_item').forEach(item => {
                if(item.getAttribute('data-id') === item_id) {
                    item.querySelector('.favorite_toggle_btn').classList.remove('favorite_toggle_btn_favorite')
                }
            })
        })
    }

    const info_filler = async (movies_info) => {
       first: for(let item of movies_info) {

            if(featured_movie_list.querySelectorAll('.movie_list_item')) {
                for(let list_item of featured_movie_list.querySelectorAll('.movie_list_item'))  if(list_item.getAttribute('data-id') == item.id) continue first 
            }
            let currentClass = item.clazz ? 'favorite_toggle_btn favorite_toggle_btn_favorite' : 'favorite_toggle_btn'
            const data = await axios.get(`http://www.omdbapi.com/?apikey=8d9cfe3d&i=${item.id}`)

            featured_movie_list.innerHTML += 
                        `<div class="movie_list_item" data-id="${item.id}">
                            <div class="photo_wrapper">
                                <img loading='lazy' src='${data.data.Poster}' alt="movie photo">
                                <div class='${currentClass}'></div>
                            </div>
            
                            <div class="year">${data.data.Year}</div>
                            <div class="title">${data.data.Title}</div>
                            <div class="score">
                                <div class="imdb_score"> <img loading='lazy'  class="imdb" alt="imdb">${data.data.imdbRating ? data.data.imdbRating : 0 }/ 100</div>
                            </div>
                            <div class="genre">${data.data.Genre}</div>
                        </div>`
        }
    }

    movie_sections.forEach((item , index) => {
        if(index != 0 && index != 4) {
            item.addEventListener('click' , async (e) => {
                let target = e.target
                let user_id = auth.currentUser.uid

                if(target.classList.contains('favorite_toggle_btn') && !target.classList.contains('favorite_toggle_btn_favorite')) {
                    if(auth.currentUser) {
                        const getInfo = (await get(ref(db , 'favorite/' + user_id))).val()
                        movies_info = getInfo ?  getInfo.movies_info : []
                        movies_info.push({id:target.parentElement.parentElement.getAttribute('data-id') , clazz:true})
                        update(ref(db , 'favorite/' + user_id) , {movies_info})
                        target.classList.add('favorite_toggle_btn_favorite')
                        console.log(movies_info);
                        featured_movie.style.display == 'none' ?     featured_movie.style.display = 'block' :  null 
                    } else {
                        alert('you are not logged in.')
                    }
                }  else if(target.classList.contains('favorite_toggle_btn_favorite')) {
                    const getInfo = (await get(ref(db , 'favorite/' + user_id))).val()
                    movies_info = getInfo ?  getInfo.movies_info : []

                    if(movies_info.length > 1) {
                        movies_info.forEach((item , index) => {
                           if(item.id === target.parentElement.parentElement.getAttribute('data-id')) {
                              movies_info.splice(index  , 1)
                              featured_movie_list.querySelectorAll('.movie_list_item')[index].remove()
                           } 
                        })
                        f_btn_ex(target.parentElement.parentElement.getAttribute('data-id') , movie_sections)

                    } else {
                        movies_info.shift()
                        featured_movie_list.querySelector('.movie_list_item').remove()
                        f_btn_ex(target.parentElement.parentElement.getAttribute('data-id') , movie_sections)
                        featured_movie.style.cssText = 'display:none'
                    }

                    target.classList.remove('favorite_toggle_btn_favorite')
                    update(ref(db , 'favorite/' + user_id) , {movies_info})
                }
                    if(target.classList.contains('favorite_toggle_btn')) {
                        if(movies_info.length > 0) {
                            info_filler(movies_info)
                        } 
                    }
            })
        }
    })
}


