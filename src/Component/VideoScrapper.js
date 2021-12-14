import React from 'react';
import { useState } from 'react';

const VideoScrapper = ({videos}) => {
    const [searchVideo, setSearchVideo] = useState("");
    return (
        <>
         <div className="flex-column">
                <input type="text" placeholder="Search video with niche...." className="Searchbox" onChange={(e)=>setSearchVideo(e.target.value)}/> 
                <p><small>Ex: Fun, Song, Nature</small></p>   
           </div>
          <div className="flex">
            {
                // eslint-disable-next-line array-callback-return
                videos.filter((video) => {
                    if (searchVideo === ""){
                        return video;
                    } else if(video.videoTag.toLowerCase().includes(searchVideo.toLowerCase())){
                        return video;
                    }
                }).map((video, key) => (
                    <iframe width="100%" height="315" key={key} src={`https://www.youtube.com/embed/${video.videoId}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                ))
            }
          </div>
        </>
    )
}

export default VideoScrapper;