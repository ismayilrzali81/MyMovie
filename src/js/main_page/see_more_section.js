import axios from "axios"
import { getMoviesInfo } from "./about_movie"
import { most_popular, new_arrival } from "./movies"


export const see_more_section = async (url_1 , place_1 , url_2) => {
    const see_more_section = document.querySelector('.see_more_section') ,
    sections =  document.querySelectorAll('section') ,
    movie_full =document.querySelector(place_1) ,
    movie_full_header = see_more_section.querySelector('h2') ,
    about_movie = document.querySelector('.about_movie') ,
    response = await axios.get(url_1)


    const see_more = document.querySelectorAll('.see_more')

    const see_more_fill_op = (movie_full_header  ,most_popular , see_more_section , h2_text , url_1 , place_1) => {
        movie_full_header.innerText = h2_text
        most_popular(url_1 , place_1 , false , false , response)
        see_more_section.style.cssText=' opacity: 1; transform: scale(1);'
    }

    see_more.forEach((item , index) => {
        item.addEventListener('click' , () => {
            let h2_text = sections[index + 1].querySelector('h2').innerText
            if(h2_text == 'Most Popular Movies') {
                see_more_fill_op(movie_full_header , most_popular , see_more_section , h2_text , url_1 , place_1)
            }else if(h2_text == 'Featured Movie' && document.querySelector('.featured_movie').style.display == 'none') {
                h2_text = sections[index + 2].querySelector('h2').innerText
                see_more_fill_op(movie_full_header , new_arrival , see_more_section , h2_text , url_2 , place_1 )
            }
        })
    })

    see_more_section.querySelector('.ext_btn').addEventListener('click' , () => {
        see_more_section.style.cssText=' opacity: 0; transform: scale(0);'
        movie_full.innerHTML = ''
    })

    movie_full.addEventListener('click' , (e) => {
        let target = e.target
        if(target.classList.contains('movie_list_item'))  {
            see_more_section.style.cssText=' opacity: 0; transform: scale(0);'
            movie_full.innerHTML = ''
            getMoviesInfo(target , about_movie)
        }
        
        if(target.parentElement.classList.contains('movie_list_item')) {
            see_more_section.style.cssText=' opacity: 0; transform: scale(0);'
            movie_full.innerHTML = ''
            getMoviesInfo(target.parentElement , about_movie)
        }
        
        if(target.parentElement.parentElement.classList.contains('movie_list_item') && !(target.classList.contains('favorite_toggle_btn'))) {
            see_more_section.style.cssText=' opacity: 0; transform: scale(0);'
            movie_full.innerHTML = ''
            getMoviesInfo(target.parentElement.parentElement , about_movie)
        }
    })


}


