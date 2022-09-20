

export let sliders = () => {
   const  movie_section = document.querySelectorAll('section') 

    function getWidth (item) {
        let widthWithPX = window.getComputedStyle(item).width
        let pxIndex = widthWithPX.search(/\D/)
    return  +widthWithPX.slice(0 , pxIndex)
    }

    function getMarginRight(item) {
        let widthWithPX = window.getComputedStyle(item).marginRight
        let pxIndex = widthWithPX.search(/\D/)
    return  +widthWithPX.slice(0 , pxIndex)
    }



    movie_section.forEach((item) => {
        item.addEventListener('click' , (e) => {
            if(!item.classList.contains('header_wrapper')) {
                let target = e.target ,
                currentPosition = +item.getAttribute('data-position'),
                movie_list = item.querySelector('.movie_list') , 
                movie_list_item = movie_list.querySelector('.movie_list_item')
                 if(target.classList.contains('left_btn')) {
                    if(currentPosition != 0) {
                        currentPosition += (getWidth(movie_list_item) + getMarginRight(movie_list_item))
                        movie_list.style.transform = `translateX(${currentPosition}px)`
                        item.setAttribute('data-position' , currentPosition)
                    }
    
                } else if(target.classList.contains('right_btn')) {
                    const limit = -(getWidth(movie_list_item) + getMarginRight(movie_list_item)) * (movie_list.querySelectorAll('.movie_list_item').length - 1)
                    if(currentPosition > limit) {
                        currentPosition -= (getWidth(movie_list_item) + getMarginRight(movie_list_item))
                        movie_list.style.transform = `translateX(${currentPosition}px)`
                        item.setAttribute('data-position' , currentPosition)
                    }
                }
            }
            
        })
    })

    document.querySelector('.about_movie').addEventListener('click' , (e) => {
        let target = e.target ,
        actors_wrapper = document.querySelector('.actors_wrapper') , 
        currentPosition = +actors_wrapper.getAttribute('data-position'),
        actor = actors_wrapper.querySelector('.actor')
         if(target.classList.contains('left_btn')) {
            if(currentPosition != 0) {
                currentPosition += (getWidth(actor) + getMarginRight(actor))
                actors_wrapper.style.cssText = `transform: translateX(${currentPosition}px)`
                actors_wrapper.setAttribute('data-position' , currentPosition)
            }

        } else if(target.classList.contains('right_btn')) {
            const limit = -(getWidth(actor) + getMarginRight(actor)) * (actors_wrapper.querySelectorAll('.actor').length - 4)
            if(currentPosition > limit) {
                currentPosition -= (getWidth(actor) + getMarginRight(actor))
                actors_wrapper.style.cssText = `transform: translateX(${currentPosition}px)`
                actors_wrapper.setAttribute('data-position' , currentPosition)
            }
        }
    })


}