"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[880],{880:(e,t,a)=>{a.r(t),a.d(t,{most_popular:()=>m,movies:()=>i,new_arrival:()=>v});var t=a(669),n=a.n(t);const m=async(e,t,a=!0,i=!1,d)=>{console.log(d);const r=document.querySelector(""+t);for(var l in d.data.items){var o=d.data.items[l],o=await n().get("http://www.omdbapi.com/?apikey=8d9cfe3d&i="+o.id);if("N/A"!==o.data.imdbRating&&void 0!==o.data.imdbRating&&(r.innerHTML+=`<div class="movie_list_item" data-id="${o.data.imdbID}">
                                                <div class="photo_wrapper">
                                                    <img src='${o.data.Poster}' loading="lazy" alt="movie photo">
                                                   ${a?'<div class="favorite_toggle_btn"></div>':""}
                                                </div>
                                
                                                <div class="year">${o.data.Year}</div>
                                                <div class="title">${o.data.Title}</div>
                                                <div class="score">
                                                    <div class="imdb_score"> <img  class="imdb" alt="imdb">${"N/A"!=o.data.imdbRating&&o.data.imdbRating?o.data.imdbRating:0}/ 10</div>
                                                </div>
                                                <div class="genre">${o.data.Genre}</div>
                                            </div>`,i&&10==l))break}},v=(e,a)=>{n().get(e).then(e=>{const t=document.querySelector(""+a);e.data.items.forEach(async e=>{e=await n().get("http://www.omdbapi.com/?apikey=8d9cfe3d&i="+e.id);"N/A"!=e.data.imdbRating&&null!=e.data.imdbRating&&(t.innerHTML+=`<div class="movie_list_item" data-id="${e.data.imdbID}">
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
                            </div>`)})})},i=async(e,t,a,i,d,r)=>{document.querySelector(".video_wrapper .video");var l=await n().get(e);m(e,t,!0,!0,l),v(a,i);let o=[];const s=document.querySelector(d+" div.movie_list");for(let e=0;e<5;e++){var c=l.data.items[e],c=await n().get("https://imdb-api.com/en/API/Trailer/k_7q3vomr1/"+c.id);o.push({videoId:c.data.videoId}),c.data.thumbnailUrl&&(s.innerHTML+=`<div class="movie_list_item" data-index=${e} >
                    <div class="photo_wrapper">
                        <img  alt="movie photo" loading="lazy" src="${c.data.thumbnailUrl}">
                    </div>
                    <div class="title">${c.data.fullTitle} Trailer </div>
                    </div>`)}document.querySelector(d).addEventListener("click",e=>{let t=e.target;if(t.classList.contains("movie_list_item")){if(document.querySelector(".video_wrapper").classList.toggle("active"),document.querySelector("#player")){document.querySelector("#player").remove();let e=document.createElement("div");e.id="player",document.querySelector(".video_wrapper").append(e)}new YT.Player("player",{height:"360",width:"640",videoId:o[t.dataset.index].videoId})}if(t.parentElement.classList.contains("movie_list_item")){if(document.querySelector(".video_wrapper").classList.toggle("active"),document.querySelector("#player")){document.querySelector("#player").remove();let e=document.createElement("div");e.id="player",document.querySelector(".video_wrapper").append(e)}new YT.Player("player",{height:"360",width:"640",videoId:o[t.parentElement.dataset.index].videoId})}if(t.parentElement.parentElement.classList.contains("movie_list_item")&&!t.classList.contains("favorite_toggle_btn")){if(document.querySelector(".video_wrapper").classList.toggle("active"),document.querySelector("#player")){document.querySelector("#player").remove();let e=document.createElement("div");e.id="player",document.querySelector(".video_wrapper").append(e)}new YT.Player("player",{height:"360",width:"640",videoId:o[t.parentElement.parentElement.dataset.index].videoId})}}),n().get(e).then(async t=>{let a=[];for(let e=0;e<5;e++){var i=t.data.items[e],d=await n().get("https://imdb-api.com/en/API/YouTubeTrailer/k_7q3vomr1/"+i.id),r=await n().get("http://www.omdbapi.com/?apikey=8d9cfe3d&i="+i.id),l=await(await n().get(`https://www.myapifilms.com/imdb/idIMDB?idIMDB=${i.id}&token=f183f32a-f21f-435a-81ca-2778aad3a1fe`)).data.data.movies[0].urlPoster;a.push({title:i.title,imdbRatings:r.data.imdbRating&&"N/A"!==r.data.imdbRating?r.data.imdbRating:0,poster:l,video:d.data.videoId,content:r.data.Plot})}return a}).then(a=>{const i=document.querySelector(r+" ");document.querySelectorAll(".movie_toggle li").forEach((e,t)=>{e.addEventListener("click",()=>{if(document.querySelector(".header_wrapper").style.cssText=`background: url(${a[t].poster}) 
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
        </div>`,document.querySelector(".header_wrapper").style.cssText=`background: url(${a[2].poster}) center 35% /cover no-repeat`})}}}]);