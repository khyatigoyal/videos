import React from 'react';
import VideoItem from './videoItem';
const videoList =({videos , onvideoSelect})=> {
    const renderedList = videos.map((video) => {
        return <VideoItem key={video.id.videoId} onvideoSelect={onvideoSelect} video={video}/>       
    });
    return (
        <div className="ui relaxed divider list" > 
           {renderedList}
        </div>
    )
} 
export default videoList;