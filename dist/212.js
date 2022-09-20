"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[212,273],{273:(e,t,a)=>{a.r(t),a.d(t,{about_movie:()=>s,getMoviesInfo:()=>i});var t=a(669),n=a.n(t);const i=(e,l)=>{let d=e.getAttribute("data-id");n().get("http://www.omdbapi.com/?apikey=8d9cfe3d&i="+d).then(async e=>{let t=await n().get("https://imdb-api.com/en/API/FullCast/k_uy3lv974/"+d);var a=t.data.actors.map(e=>`<div class="actor">
                         <div class="actor_photo">
                         <img loading='lazy' src="${e.image}"  alt="mini_poster">
                         </div>
                         <div class="actor_name">${e.name}</div>
                         <div class="actor_character">${e.asCharacter}</div>
                        </div>`),i=t.data.directors.items.map(e=>`<div class="item">
                            <div class="name">${e.name}</div>
                            <div class="role">${t.data.directors.job}</div>
                        </div>`),s=t.data.writers.items.map(e=>`<div class="item">
                        <div class="name">${e.name}</div>
                        <div class="role">${t.data.writers.job}</div>
                        </div>`);l.innerHTML=`
            <div class="movie_wrapper">
                <div class="photo_wrapper">
                    <img loading='lazy' src="${e.data.Poster}"  alt="poster">                        
                </div>

                <div class="info_wrapper">
                    <div class="header">${e.data.Title}</div>
                    <div class="tags">
                        <div class="tag">${e.data.Genre}</div>
                        <div class="tag">${e.data.Year}</div>
                        <div class="tag">${e.data.Runtime}</div>
                        <div class="tag trailer" data-id=${d}>Play Trailer</div>
                    </div>

                    <div class="ratings_imdb"><span>${e.data.imdbRating}</span>/10</div>    
                    <div class="text_header">Overview</div>
                    <div class="text">${e.data.Plot}</div>
                    <div class="director_writer">  
                            ${i}
                            ${s}
                    </div>
                    <div class="line"></div>
                    <div class="actors">
                        <div class="left_btn"></div>
                        <div class="right_btn"></div>
                        <div class="actors_list">
                        <div class="actors_wrapper" data-position=0>${a}</div> 
                        </div>             
                    </div>
                </div>
                <div class="ext_btn">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.3333 2.54675L17.4533 0.666748L9.99996 8.12008L2.54663 0.666748L0.666626 2.54675L8.11996 10.0001L0.666626 17.4534L2.54663 19.3334L9.99996 11.8801L17.4533 19.3334L19.3333 17.4534L11.88 10.0001L19.3333 2.54675Z" fill="black"/>
                    </svg>
                </div>
            <div/>`,l.classList.add("about_movie_active")}),l.addEventListener("click",async e=>{if(!e.target.classList.contains("ext_btn")&&"svg"!=e.target.tagName&&"path"!=e.target.tagName||l.classList.remove("about_movie_active"),"tag trailer"==e.target.classList.value){e=await n().get("https://imdb-api.com/en/API/YouTubeTrailer/k_uy3lv974/"+e.target.dataset.id);if(document.querySelector("#player")){document.querySelector("#player").remove();let e=document.createElement("div");e.id="player",document.querySelector(".video_wrapper").append(e)}new YT.Player("player",{height:"360",width:"640",videoId:""+e.data.videoId}),document.querySelector(".video_wrapper").classList.toggle("active")}})},s=()=>{let a=document.querySelector(".about_movie"),e=document.querySelectorAll("section");e.forEach((e,t)=>{0!=t&&4!=t&&e.addEventListener("click",async e=>{let t=e.target;t.classList.contains("movie_list_item")&&i(t,a),t.parentElement.classList.contains("movie_list_item")&&i(t.parentElement,a),t.parentElement.parentElement.classList.contains("movie_list_item")&&!t.classList.contains("favorite_toggle_btn")&&i(t.parentElement.parentElement,a)})})}},212:(e,t,a)=>{a.r(t),a.d(t,{search_btn:()=>i});var t=a(669),n=a.n(t),c=a(273);const i=()=>{const a=document.querySelector(".search input"),i=document.querySelector(".search_info"),s=i.querySelector(".search_info_content"),e=document.querySelector(".search_btn"),t=i.querySelector(".loading");let l=document.querySelector(".about_movie");async function d(){0<a.value.length?(i.style.cssText="opacity:1;",t.style.display="block",s.innerHTML=""):i.style.cssText="opacity:0;";let e=await n().get("http://www.omdbapi.com/?apikey=8d9cfe3d&s="+a.value);t.style.display="none","False"!=e.data.Response?(s.innerHTML="",e.data.Search.forEach(e=>{"N/A"!=e.Poster&&(s.innerHTML+=`
                <div class="movie_list_item" data-id=${e.imdbID}>
                    <div class="photo_wrapper"><img loading='lazy' src=${e.Poster}  alt="image"></div>
                    <div class="movie_info">
                        <div class="movie_title">${e.Title}</div>
                        <div class="year">${e.Year}</div>
                        <div class="type">${e.Type}</div>
                    </div>
                </div>`)})):(s.innerHTML="Not found",t.style.display="none")}i.addEventListener("click",async e=>{let t=e.target;t.classList.contains("movie_list_item")&&((0,c.getMoviesInfo)(t,l),i.style.cssText="opacity:0;",s.innerHTML="",a.value=""),t.parentElement.classList.contains("movie_list_item")&&((0,c.getMoviesInfo)(t.parentElement,l),i.style.cssText="opacity:0;",s.innerHTML="",a.value=""),t.parentElement.parentElement.classList.contains("movie_list_item")&&!t.classList.contains("favorite_toggle_btn")&&((0,c.getMoviesInfo)(t.parentElement.parentElement,l),i.style.cssText="opacity:0;",s.innerHTML="",a.value="")}),a.addEventListener("keypress",async e=>{"Enter"===e.key&&d()}),a.addEventListener("input",()=>{0<!a.value.length&&(i.style.cssText="opacity:0;",s.innerHTML="",t.style.display="none")}),e.addEventListener("click",d)}}}]);