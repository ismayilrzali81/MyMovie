import axios from "axios"

export const most_popular = async (url_1 , place_1 , favorite = true , min = false , response) => {
        const movies = document.querySelector(`${place_1}`)
                    main:for(let index in response.data.items) {
                        let currentMovie = response.data.items[index]
                        let res = await axios.get(`http://www.omdbapi.com/?apikey=8d9cfe3d&i=${currentMovie.id}`)
                        if(res.data.imdbRating === 'N/A' || res.data.imdbRating === undefined) {
                            continue
                        }
                        movies.innerHTML += 
                                            `<div class="movie_list_item" data-id="${res.data.imdbID}">
                                                <div class="photo_wrapper">
                                                    <img src='${res.data.Poster}' loading="lazy" alt="movie photo">
                                                   ${favorite ?  `<div class="favorite_toggle_btn"></div>` : ''}
                                                </div>
                                
                                                <div class="year">${res.data.Year}</div>
                                                <div class="title">${res.data.Title}</div>
                                                <div class="score">
                                                    <div class="imdb_score"> <img  class="imdb" alt="imdb">${(res.data.imdbRating != 'N/A' && res.data.imdbRating) ? res.data.imdbRating : 0 }/ 10</div>
                                                </div>
                                                <div class="genre">${res.data.Genre}</div>
                                            </div>`
                        if(min && index == 10) {
                            break main
                        }
                    }
}
              

export const new_arrival = (url_2 , place_2) => {
    axios.get(url_2).then((response) => {
        const movies = document.querySelector(`${place_2}`)
        response.data.items.forEach(async currentMovie => {
        let res = await axios.get(`http://www.omdbapi.com/?apikey=8d9cfe3d&i=${currentMovie.id}`)
        if(res.data.imdbRating == 'N/A' || res.data.imdbRating == undefined) {
            return
        }
        movies.innerHTML += 
                            `<div class="movie_list_item" data-id="${res.data.imdbID}">
                                <div class="photo_wrapper">
                                    <img src='${res.data.Poster}' loading="lazy" alt="movie photo">
                                    <div class="favorite_toggle_btn"></div>
                                </div>
                
                                <div class="year">${res.data.Year}</div>
                                <div class="title">${res.data.Title}</div>
                                <div class="score">
                                    <div class="imdb_score"> <img  class="imdb" alt="imdb">${(res.data.imdbRating != 'N/A' && res.data.imdbRating) ? res.data.imdbRating : 0 }/ 10</div>
                                </div>
                                <div class="genre">${res.data.Genre}</div>
                            </div>`
        }) 
    })
}

export const movies = async (url_1 , place_1 , url_2 , place_2 , place_3 , place_4  ) =>  {
    const video = document.querySelector('.video_wrapper .video') ,
    response = await axios.get(url_1)

// // // most popular
   most_popular(url_1 , place_1 , true , true , response) 

// // // // // //     // new Arrival
     new_arrival(url_2 , place_2)

 

// // // // // // exclusive
    let movies_info = []
    const movies = document.querySelector(`${place_3} div.movie_list`)
        for(let i = 0 ; i < 5  ; i++) {
            let randomMovie = response.data.items[i]

            const data = await axios.get(`https://imdb-api.com/en/API/Trailer/k_7xs694cx/${randomMovie.id}`)

                movies_info.push({
                    videoId:data.data.videoId
                }) 
                
                if(data.data.thumbnailUrl) {
                    movies.innerHTML += 
                    `<div class="movie_list_item" data-index=${i} >
                    <div class="photo_wrapper">
                        <img  alt="movie photo" loading="lazy" src="${data.data.thumbnailUrl}">
                    </div>
                    <div class="title">${data.data.fullTitle} Trailer </div>
                    </div>`
                } else {
                    continue;
                }
            }

        document.querySelector(place_3).addEventListener('click' , (e) => {
            let target = e.target
            
                if(target.classList.contains('movie_list_item'))  {
                        document.querySelector('.video_wrapper').classList.toggle('active')

                            if(document.querySelector('#player')) {
                            document.querySelector('#player').remove() 
                            let player = document.createElement('div')
                            player.id = 'player'
                            document.querySelector('.video_wrapper').append(player)
                        }

                        new YT.Player('player', {
                            height: '360',
                            width: '640',
                            videoId: movies_info[target.dataset.index].videoId
                            });
                }
                
                if(target.parentElement.classList.contains('movie_list_item')) {
                        document.querySelector('.video_wrapper').classList.toggle('active')

                        if(document.querySelector('#player')) {
                            document.querySelector('#player').remove() 
                            let player = document.createElement('div')
                            player.id = 'player'
                            document.querySelector('.video_wrapper').append(player)
                        }

                            new YT.Player('player', {
                            height: '360',
                            width: '640',
                            videoId: movies_info[target.parentElement.dataset.index].videoId
                            });
                }
                
                if(target.parentElement.parentElement.classList.contains('movie_list_item') && !(target.classList.contains('favorite_toggle_btn'))) {
                        document.querySelector('.video_wrapper').classList.toggle('active')



                            if(document.querySelector('#player')) {
                            document.querySelector('#player').remove() 
                            let player = document.createElement('div')
                            player.id = 'player'
                            document.querySelector('.video_wrapper').append(player)
                        }

                        new YT.Player('player', {
                            height: '360',
                            width: '640',
                            videoId: movies_info[target.parentElement.parentElement.dataset.index].videoId
                            });
                }
        })        


       



// // //     // main_screen
   

    axios.get(url_1).then(async(response) => {
      
        let movies_info = []
        
        
        for(let i = 0 ; i < 5 ; i++) {
            let randomMovie = response.data.items[i]

            const data = await  axios.get(`https://imdb-api.com/en/API/YouTubeTrailer/k_7q3vomr1/${randomMovie.id}`)
            let res = await axios.get(`http://www.omdbapi.com/?apikey=8d9cfe3d&i=${randomMovie.id}`) ,
            poster = await  (await axios.get(`https://www.myapifilms.com/imdb/idIMDB?idIMDB=${randomMovie.id}&token=f183f32a-f21f-435a-81ca-2778aad3a1fe`)).data.data.movies[0].urlPoster

                movies_info.push({
                    title:randomMovie.title ,
                    imdbRatings: (res.data.imdbRating && res.data.imdbRating !== 'N/A' ) ? res.data.imdbRating : 0 ,
                    poster: poster ,
                    video: data.data.videoId ,
                    content: res.data.Plot

                })
        }

        return movies_info
        
    }).then((movies_info) => {
        const movies = document.querySelector(`${place_4} `)

        document.querySelectorAll('.movie_toggle li').forEach((item , index) => {
            item.addEventListener('click' , () => {
                
                document.querySelector('.header_wrapper').style.cssText = `background: url(${movies_info[index].poster}) 
                center 35% /cover no-repeat`

                if(document.querySelector('iframe#player')) {
                    document.querySelector('iframe#player').remove() 
                    let player = document.createElement('div')
                    player.id = 'player'
                    document.querySelector('.video_wrapper').append(player)
                } 
                
                new YT.Player('player', {
                height: '360',
                width: '640',
                videoId: `${movies_info[index].video}`
                });


                movies.innerHTML = 
                ` <div class="container">
                    <div class="title">${movies_info[index].title}</div>
                    <div class="score">
                        <div class="imdb_score"> <img loading="lazy" class="imdb"  alt="imdb">${(movies_info[index].imdbRatings  || movies_info[index].imdbRatings =='N/A')? movies_info[index].imdbRatings : 0 } / 10</div>
                    </div>
                    <div class="content">${movies_info[index].content}</div>
                    <button class="watch_trailer"> <img  alt="play">  Watch trailer</button>
                </div>`
            })
        })

        movies.innerHTML = 
        ` <div class="container">
            <div class="title">${movies_info[2].title}</div>
            <div class="score">
                <div class="imdb_score"> <img class="imdb"  alt="imdb">${(movies_info[2].imdbRatings || movies_info[2].imdbRatings =='N/A') ? movies_info[2].imdbRatings : 0 } / 10</div>
            </div>
            <div class="content">${movies_info[2].content}</div>
            <button class="watch_trailer"> <img  alt="play">  Watch trailer</button>
        </div>`

        document.querySelector('.header_wrapper').style.cssText = `background: url(${movies_info[2].poster}) center 35% /cover no-repeat`
    })
}