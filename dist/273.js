"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[273],{273:(a,t,e)=>{e.r(t),e.d(t,{about_movie:()=>s,getMoviesInfo:()=>i});var t=e(669),r=e.n(t);const i=(a,d)=>{let l=a.getAttribute("data-id");r().get("http://www.omdbapi.com/?apikey=8d9cfe3d&i="+l).then(async a=>{let t=await r().get("https://imdb-api.com/en/API/FullCast/k_uy3lv974/"+l);var e=t.data.actors.map(a=>`<div class="actor">
                         <div class="actor_photo">
                         <img loading='lazy' src="${a.image}"  alt="mini_poster">
                         </div>
                         <div class="actor_name">${a.name}</div>
                         <div class="actor_character">${a.asCharacter}</div>
                        </div>`),i=t.data.directors.items.map(a=>`<div class="item">
                            <div class="name">${a.name}</div>
                            <div class="role">${t.data.directors.job}</div>
                        </div>`),s=t.data.writers.items.map(a=>`<div class="item">
                        <div class="name">${a.name}</div>
                        <div class="role">${t.data.writers.job}</div>
                        </div>`);d.innerHTML=`
            <div class="movie_wrapper">
                <div class="photo_wrapper">
                    <img loading='lazy' src="${a.data.Poster}"  alt="poster">                        
                </div>

                <div class="info_wrapper">
                    <div class="header">${a.data.Title}</div>
                    <div class="tags">
                        <div class="tag">${a.data.Genre}</div>
                        <div class="tag">${a.data.Year}</div>
                        <div class="tag">${a.data.Runtime}</div>
                        <div class="tag trailer" data-id=${l}>Play Trailer</div>
                    </div>

                    <div class="ratings_imdb"><span>${a.data.imdbRating}</span>/10</div>    
                    <div class="text_header">Overview</div>
                    <div class="text">${a.data.Plot}</div>
                    <div class="director_writer">  
                            ${i}
                            ${s}
                    </div>
                    <div class="line"></div>
                    <div class="actors">
                        <div class="left_btn"></div>
                        <div class="right_btn"></div>
                        <div class="actors_list">
                        <div class="actors_wrapper" data-position=0>${e}</div> 
                        </div>             
                    </div>
                </div>
                <div class="ext_btn">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.3333 2.54675L17.4533 0.666748L9.99996 8.12008L2.54663 0.666748L0.666626 2.54675L8.11996 10.0001L0.666626 17.4534L2.54663 19.3334L9.99996 11.8801L17.4533 19.3334L19.3333 17.4534L11.88 10.0001L19.3333 2.54675Z" fill="black"/>
                    </svg>
                </div>
            <div/>`,d.classList.add("about_movie_active")}),d.addEventListener("click",async a=>{if(!a.target.classList.contains("ext_btn")&&"svg"!=a.target.tagName&&"path"!=a.target.tagName||d.classList.remove("about_movie_active"),"tag trailer"==a.target.classList.value){a=await r().get("https://imdb-api.com/en/API/YouTubeTrailer/k_uy3lv974/"+a.target.dataset.id);if(document.querySelector("#player")){document.querySelector("#player").remove();let a=document.createElement("div");a.id="player",document.querySelector(".video_wrapper").append(a)}new YT.Player("player",{height:"360",width:"640",videoId:""+a.data.videoId}),document.querySelector(".video_wrapper").classList.toggle("active")}})},s=()=>{let e=document.querySelector(".about_movie"),a=document.querySelectorAll("section");a.forEach((a,t)=>{0!=t&&4!=t&&a.addEventListener("click",async a=>{let t=a.target;t.classList.contains("movie_list_item")&&i(t,e),t.parentElement.classList.contains("movie_list_item")&&i(t.parentElement,e),t.parentElement.parentElement.classList.contains("movie_list_item")&&!t.classList.contains("favorite_toggle_btn")&&i(t.parentElement.parentElement,e)})})}}}]);