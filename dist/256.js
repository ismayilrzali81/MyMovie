"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[256,273,880],{273:(e,t,a)=>{a.r(t),a.d(t,{about_movie:()=>d,getMoviesInfo:()=>i});var t=a(669),l=a.n(t);const i=(e,s)=>{let r=e.getAttribute("data-id");l().get("http://www.omdbapi.com/?apikey=8d9cfe3d&i="+r).then(async e=>{let t=await l().get("https://imdb-api.com/en/API/FullCast/k_uy3lv974/"+r);var a=t.data.actors.map(e=>`<div class="actor">
                         <div class="actor_photo">
                         <img loading='lazy' src="${e.image}"  alt="mini_poster">
                         </div>
                         <div class="actor_name">${e.name}</div>
                         <div class="actor_character">${e.asCharacter}</div>
                        </div>`),i=t.data.directors.items.map(e=>`<div class="item">
                            <div class="name">${e.name}</div>
                            <div class="role">${t.data.directors.job}</div>
                        </div>`),d=t.data.writers.items.map(e=>`<div class="item">
                        <div class="name">${e.name}</div>
                        <div class="role">${t.data.writers.job}</div>
                        </div>`);s.innerHTML=`
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
                        <div class="tag trailer" data-id=${r}>Play Trailer</div>
                    </div>

                    <div class="ratings_imdb"><span>${e.data.imdbRating}</span>/10</div>    
                    <div class="text_header">Overview</div>
                    <div class="text">${e.data.Plot}</div>
                    <div class="director_writer">  
                            ${i}
                            ${d}
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
            <div/>`,s.classList.add("about_movie_active")}),s.addEventListener("click",async e=>{if(!e.target.classList.contains("ext_btn")&&"svg"!=e.target.tagName&&"path"!=e.target.tagName||s.classList.remove("about_movie_active"),"tag trailer"==e.target.classList.value){e=await l().get("https://imdb-api.com/en/API/YouTubeTrailer/k_uy3lv974/"+e.target.dataset.id);if(document.querySelector("#player")){document.querySelector("#player").remove();let e=document.createElement("div");e.id="player",document.querySelector(".video_wrapper").append(e)}new YT.Player("player",{height:"360",width:"640",videoId:""+e.data.videoId}),document.querySelector(".video_wrapper").classList.toggle("active")}})},d=()=>{let a=document.querySelector(".about_movie"),e=document.querySelectorAll("section");e.forEach((e,t)=>{0!=t&&4!=t&&e.addEventListener("click",async e=>{let t=e.target;t.classList.contains("movie_list_item")&&i(t,a),t.parentElement.classList.contains("movie_list_item")&&i(t.parentElement,a),t.parentElement.parentElement.classList.contains("movie_list_item")&&!t.classList.contains("favorite_toggle_btn")&&i(t.parentElement.parentElement,a)})})}},880:(e,t,a)=>{a.r(t),a.d(t,{most_popular:()=>v,movies:()=>i,new_arrival:()=>m});var t=a(669),n=a.n(t);const v=async(e,t,a=!0,i=!1,d)=>{console.log(d);const s=document.querySelector(""+t);for(var r in d.data.items){var l=d.data.items[r],l=await n().get("http://www.omdbapi.com/?apikey=8d9cfe3d&i="+l.id);if("N/A"!==l.data.imdbRating&&void 0!==l.data.imdbRating&&(s.innerHTML+=`<div class="movie_list_item" data-id="${l.data.imdbID}">
                                                <div class="photo_wrapper">
                                                    <img src='${l.data.Poster}' loading="lazy" alt="movie photo">
                                                   ${a?'<div class="favorite_toggle_btn"></div>':""}
                                                </div>
                                
                                                <div class="year">${l.data.Year}</div>
                                                <div class="title">${l.data.Title}</div>
                                                <div class="score">
                                                    <div class="imdb_score"> <img  class="imdb" alt="imdb">${"N/A"!=l.data.imdbRating&&l.data.imdbRating?l.data.imdbRating:0}/ 10</div>
                                                </div>
                                                <div class="genre">${l.data.Genre}</div>
                                            </div>`,i&&10==r))break}},m=(e,a)=>{n().get(e).then(e=>{const t=document.querySelector(""+a);e.data.items.forEach(async e=>{e=await n().get("http://www.omdbapi.com/?apikey=8d9cfe3d&i="+e.id);"N/A"!=e.data.imdbRating&&null!=e.data.imdbRating&&(t.innerHTML+=`<div class="movie_list_item" data-id="${e.data.imdbID}">
                                <div class="photo_wrapper">
                                    <img src='${e.data.Poster}' loading="lazy" alt="movie photo">
                                    <div class="favorite_toggle_btn"></div>
                                </div>
                
                                <div class="year">${e.data.Year}</div>
                                <div class="title">${e.data.Title}</div>
                                <div class="score">
                                    <div class="imdb_score"> <img  class="imdb" alt="imdb">${"N/A"!=e.data.imdbRating&&e.data.imdbRating?e.data.imdbRating:0}/ 10</div>
                                </div>
                                <div class="genre">${e.data.Genre}</div>
                            </div>`)})})},i=async(e,t,a,i,d,s)=>{document.querySelector(".video_wrapper .video");var r=await n().get(e);v(e,t,!0,!0,r),m(a,i);let l=[];const o=document.querySelector(d+" div.movie_list");for(let e=0;e<5;e++){var c=r.data.items[e],c=await n().get("https://imdb-api.com/en/API/Trailer/k_7q3vomr1/"+c.id);l.push({videoId:c.data.videoId}),c.data.thumbnailUrl&&(o.innerHTML+=`<div class="movie_list_item" data-index=${e} >
                    <div class="photo_wrapper">
                        <img  alt="movie photo" loading="lazy" src="${c.data.thumbnailUrl}">
                    </div>
                    <div class="title">${c.data.fullTitle} Trailer </div>
                    </div>`)}document.querySelector(d).addEventListener("click",e=>{let t=e.target;if(t.classList.contains("movie_list_item")){if(document.querySelector(".video_wrapper").classList.toggle("active"),document.querySelector("#player")){document.querySelector("#player").remove();let e=document.createElement("div");e.id="player",document.querySelector(".video_wrapper").append(e)}new YT.Player("player",{height:"360",width:"640",videoId:l[t.dataset.index].videoId})}if(t.parentElement.classList.contains("movie_list_item")){if(document.querySelector(".video_wrapper").classList.toggle("active"),document.querySelector("#player")){document.querySelector("#player").remove();let e=document.createElement("div");e.id="player",document.querySelector(".video_wrapper").append(e)}new YT.Player("player",{height:"360",width:"640",videoId:l[t.parentElement.dataset.index].videoId})}if(t.parentElement.parentElement.classList.contains("movie_list_item")&&!t.classList.contains("favorite_toggle_btn")){if(document.querySelector(".video_wrapper").classList.toggle("active"),document.querySelector("#player")){document.querySelector("#player").remove();let e=document.createElement("div");e.id="player",document.querySelector(".video_wrapper").append(e)}new YT.Player("player",{height:"360",width:"640",videoId:l[t.parentElement.parentElement.dataset.index].videoId})}}),n().get(e).then(async t=>{let a=[];for(let e=0;e<5;e++){var i=t.data.items[e],d=await n().get("https://imdb-api.com/en/API/YouTubeTrailer/k_7q3vomr1/"+i.id),s=await n().get("http://www.omdbapi.com/?apikey=8d9cfe3d&i="+i.id),r=await(await n().get(`https://www.myapifilms.com/imdb/idIMDB?idIMDB=${i.id}&token=f183f32a-f21f-435a-81ca-2778aad3a1fe`)).data.data.movies[0].urlPoster;a.push({title:i.title,imdbRatings:s.data.imdbRating&&"N/A"!==s.data.imdbRating?s.data.imdbRating:0,poster:r,video:d.data.videoId,content:s.data.Plot})}return a}).then(a=>{const i=document.querySelector(s+" ");document.querySelectorAll(".movie_toggle li").forEach((e,t)=>{e.addEventListener("click",()=>{if(document.querySelector(".header_wrapper").style.cssText=`background: url(${a[t].poster}) 
                center 35% /cover no-repeat`,document.querySelector("iframe#player")){document.querySelector("iframe#player").remove();let e=document.createElement("div");e.id="player",document.querySelector(".video_wrapper").append(e)}new YT.Player("player",{height:"360",width:"640",videoId:""+a[t].video}),i.innerHTML=` <div class="container">
                    <div class="title">${a[t].title}</div>
                    <div class="score">
                        <div class="imdb_score"> <img loading="lazy" class="imdb"  alt="imdb">${a[t].imdbRatings||"N/A"==a[t].imdbRatings?a[t].imdbRatings:0} / 10</div>
                    </div>
                    <div class="content">${a[t].content}</div>
                    <button class="watch_trailer"> <img  alt="play">  Watch trailer</button>
                </div>`})}),i.innerHTML=` <div class="container">
            <div class="title">${a[2].title}</div>
            <div class="score">
                <div class="imdb_score"> <img class="imdb"  alt="imdb">${a[2].imdbRatings||"N/A"==a[2].imdbRatings?a[2].imdbRatings:0} / 10</div>
            </div>
            <div class="content">${a[2].content}</div>
            <button class="watch_trailer"> <img  alt="play">  Watch trailer</button>
        </div>`,document.querySelector(".header_wrapper").style.cssText=`background: url(${a[2].poster}) center 35% /cover no-repeat`})}},256:(e,t,a)=>{a.r(t),a.d(t,{see_more_section:()=>i});var t=a(669),m=a.n(t),p=a(273),u=a(880);const i=async(a,i,d)=>{const s=document.querySelector(".see_more_section"),r=document.querySelectorAll("section"),l=document.querySelector(i),o=s.querySelector("h2"),c=document.querySelector(".about_movie"),n=await m().get(a),e=document.querySelectorAll(".see_more"),v=(e,t,a,i,d,s)=>{e.innerText=i,t(d,s,!1,!1,n),a.style.cssText=" opacity: 1; transform: scale(1);"};e.forEach((e,t)=>{e.addEventListener("click",()=>{let e=r[t+1].querySelector("h2").innerText;"Most Popular Movies"==e?v(o,u.most_popular,s,e,a,i):"Featured Movie"==e&&"none"==document.querySelector(".featured_movie").style.display&&(e=r[t+2].querySelector("h2").innerText,v(o,u.new_arrival,s,e,d,i))})}),s.querySelector(".ext_btn").addEventListener("click",()=>{s.style.cssText=" opacity: 0; transform: scale(0);",l.innerHTML=""}),l.addEventListener("click",e=>{let t=e.target;t.classList.contains("movie_list_item")&&(s.style.cssText=" opacity: 0; transform: scale(0);",(l.innerHTML="",p.getMoviesInfo)(t,c)),t.parentElement.classList.contains("movie_list_item")&&(s.style.cssText=" opacity: 0; transform: scale(0);",(l.innerHTML="",p.getMoviesInfo)(t.parentElement,c)),t.parentElement.parentElement.classList.contains("movie_list_item")&&!t.classList.contains("favorite_toggle_btn")&&(s.style.cssText=" opacity: 0; transform: scale(0);",(l.innerHTML="",p.getMoviesInfo)(t.parentElement.parentElement,c))})}}}]);