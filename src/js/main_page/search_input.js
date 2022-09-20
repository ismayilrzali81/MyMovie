import axios from "axios"
import { getMoviesInfo } from "./about_movie"


export const search_btn = () => {
    const input = document.querySelector('.search input') ,
    search_info = document.querySelector('.search_info') ,
    content = search_info.querySelector('.search_info_content') ,
    search_btn = document.querySelector('.search_btn') ,
    loading = search_info.querySelector('.loading')
    let about_movie = document.querySelector('.about_movie')

    search_info.addEventListener('click' , async (e) => {

        let target = e.target

        if(target.classList.contains('movie_list_item'))  {
            getMoviesInfo(target , about_movie)
            search_info.style.cssText = 'opacity:0;'
            content.innerHTML = ''
            input.value = ''
        }
        
        if(target.parentElement.classList.contains('movie_list_item')) {
            getMoviesInfo(target.parentElement , about_movie)
            search_info.style.cssText = 'opacity:0;'
            content.innerHTML = ''
            input.value = ''
        }
        
        if(target.parentElement.parentElement.classList.contains('movie_list_item') && !(target.classList.contains('favorite_toggle_btn'))) {
            getMoviesInfo(target.parentElement.parentElement , about_movie)
            search_info.style.cssText = 'opacity:0;'
            content.innerHTML = ''
            input.value = ''
        }
    })

   async function search_operation() {
        if(input.value.length > 0) {
            search_info.style.cssText = 'opacity:1;'
            loading.style.display = 'block'
            content.innerHTML = ''
        } else { search_info.style.cssText = 'opacity:0;'}
        let res = await axios.get(`http://www.omdbapi.com/?apikey=8d9cfe3d&s=${input.value}`)
        loading.style.display = 'none'
        if(res.data.Response != 'False') {
            content.innerHTML = ''
            res.data.Search.forEach(item => {
                if(item.Poster == 'N/A') return
                content.innerHTML+= `
                <div class="movie_list_item" data-id=${item.imdbID}>
                    <div class="photo_wrapper"><img loading='lazy' src=${item.Poster}  alt="image"></div>
                    <div class="movie_info">
                        <div class="movie_title">${item.Title}</div>
                        <div class="year">${item.Year}</div>
                        <div class="type">${item.Type}</div>
                    </div>
                </div>`
            })
        }  else {
            content.innerHTML = 'Not found'
            loading.style.display = 'none'
        }
    }
    input.addEventListener('keypress' , async (e) => {
        if(e.key === "Enter") {
            search_operation()
        }
    })

    input.addEventListener('input' ,  () => {
        if(!input.value.length > 0) {
            search_info.style.cssText = 'opacity:0;'
            content.innerHTML = ''
            loading.style.display = 'none'
        }
    })

    search_btn.addEventListener('click' ,  search_operation)



}