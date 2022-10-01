import axios from "axios"



export const getMoviesInfo = (target , about_movie) => {
    let id =  target.getAttribute('data-id')

         axios.get(`http://www.omdbapi.com/?apikey=8d9cfe3d&i=${id}`).then( async res => {

            let actors_res = await axios.get(`https://imdb-api.com/en/API/FullCast/k_7xs694cx/${id}`)

                   let actors_lists =  actors_res.data.actors.map(item => {
                         return `<div class="actor">
                         <div class="actor_photo">
                         <img loading='lazy' src="${item.image}"  alt="mini_poster">
                         </div>
                         <div class="actor_name">${item.name}</div>
                         <div class="actor_character">${item.asCharacter}</div>
                        </div>`
                    }) 

                   let director_list = actors_res.data.directors.items.map(item => {
                        return `<div class="item">
                            <div class="name">${item.name}</div>
                            <div class="role">${actors_res.data.directors.job}</div>
                        </div>`
                    }) 
                   let writers_list = actors_res.data.writers.items.map(item => {
                        return `<div class="item">
                        <div class="name">${item.name}</div>
                        <div class="role">${actors_res.data.writers.job}</div>
                        </div>`
                    }) 

            
            about_movie.innerHTML = `
            <div class="movie_wrapper">
                <div class="photo_wrapper">
                    <img loading='lazy' src="${res.data.Poster}"  alt="poster">                        
                </div>

                <div class="info_wrapper">
                    <div class="header">${res.data.Title}</div>
                    <div class="tags">
                        <div class="tag">${res.data.Genre}</div>
                        <div class="tag">${res.data.Year}</div>
                        <div class="tag">${res.data.Runtime}</div>
                        <div class="tag trailer" data-id=${id}>Play Trailer</div>
                    </div>

                    <div class="ratings_imdb"><span>${res.data.imdbRating}</span>/10</div>    
                    <div class="text_header">Overview</div>
                    <div class="text">${res.data.Plot}</div>
                    <div class="director_writer">  
                    </div>
                    <div class="line"></div>
                    <div class="actors">
                        <div class="left_btn"></div>
                        <div class="right_btn"></div>
                        <div class="actors_list">
                        <div class="actors_wrapper" data-position=0></div> 
                        </div>             
                    </div>
                </div>
                <div class="ext_btn">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.3333 2.54675L17.4533 0.666748L9.99996 8.12008L2.54663 0.666748L0.666626 2.54675L8.11996 10.0001L0.666626 17.4534L2.54663 19.3334L9.99996 11.8801L17.4533 19.3334L19.3333 17.4534L11.88 10.0001L19.3333 2.54675Z" fill="black"/>
                    </svg>
                </div>
            <div/>`

             director_list.forEach(item => {
                about_movie.querySelector('.director_writer').innerHTML+= item
             }) 
             writers_list.forEach(item => {
                about_movie.querySelector('.director_writer').innerHTML+= item
             }) 

             actors_lists.forEach(item => {
                about_movie.querySelector('.actors_wrapper').innerHTML+= item
             }) 





            about_movie.classList.add('about_movie_active')
         })

         about_movie.addEventListener('click' , async (e) => {
            if(e.target.classList.contains('ext_btn') || e.target.tagName == 'svg' || e.target.tagName == 'path' ) {
                    about_movie.classList.remove('about_movie_active')
            } if(e.target.classList.value == 'tag trailer') {
                    const res_1 = await  axios.get(`https://imdb-api.com/en/API/YouTubeTrailer/k_uy3lv974/${e.target.dataset.id}`)
                      if(document.querySelector('#player')) {
                          document.querySelector('#player').remove() 
                          let player = document.createElement('div')
                          player.id = 'player'
                          document.querySelector('.video_wrapper').append(player)
                      } 
                                  
                      new YT.Player('player', {
                      height: '360',
                      width: '640',
                      videoId: `${res_1.data.videoId}`
                      });
        
                      document.querySelector('.video_wrapper').classList.toggle('active')
            }
           }) 
}


export const about_movie = () => {
    let about_movie = document.querySelector('.about_movie') ,
    movie_sections = document.querySelectorAll('section') 

        movie_sections.forEach((item , index) => {
            if(index != 0 && index != 4) {
                item.addEventListener('click' , async (e) => {

                    let target = e.target

                    if(target.classList.contains('movie_list_item'))  {
                        getMoviesInfo(target , about_movie)
                    }
                    
                    if(target.parentElement.classList.contains('movie_list_item')) {
                        getMoviesInfo(target.parentElement , about_movie)
                    }
                    
                    if(target.parentElement.parentElement.classList.contains('movie_list_item') && !(target.classList.contains('favorite_toggle_btn'))) {
                        getMoviesInfo(target.parentElement.parentElement , about_movie)
                    }
                })
            }
    })

}