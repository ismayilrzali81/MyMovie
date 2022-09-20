import { getAuth } from "firebase/auth";

export const header = () => {
    let auth = getAuth()
    const movie_toggle = document.querySelectorAll('.movie_toggle li') ,
    menu_btn = document.querySelector('.menu_btn') ,
    menu = document.querySelector('.menu') ,
    video_wrapper =  document.querySelector('.video_wrapper')

    movie_toggle.forEach((item) => {
        item.addEventListener('click' , () => {
            movie_toggle.forEach((item) => {
                item.classList.remove('active_item');
            })
            item.classList.toggle('active_item');
        });
    })

    menu_btn.addEventListener('click' , () => {
        menu.classList.toggle('menu_active');
    });

    menu.addEventListener('click' , (e) => {
        let target = e.target
        if(target.classList.contains('log_out')) {
            auth.signOut();
        }
    })

    document.querySelector('body').addEventListener('click' , (e) => {
        let target = e.target
        if(target.classList.contains('video_wrapper')) {
            if(target.classList.contains('active')) {
                target.classList.remove('active')  
                document.querySelector('iframe').contentWindow.postMessage( '{"event":"command", "func":"pauseVideo", "args":""}', '*')
            }
        }
    })
    

    document.querySelector('.header_wrapper').addEventListener('click' , (e) => {
        let target = e.target
         if(target.classList.contains('watch_trailer')) {
            video_wrapper.classList.toggle('active')
        }
    })


    
}