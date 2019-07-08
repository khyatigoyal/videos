import "./videoItem.css";
import React from 'react';

const videoItem = ({video, onvideoSelect}) => {
    return (
        <div onClick={()=>onvideoSelect(video)}className="video-item item">
            <img className="ui image" alt={video.snippet.title} src={video.snippet.thumbnails.medium.url} />
            <div className="content">
                <div className="header" >{video.snippet.title}</div>
            </div>
        </div>
    );
}
export default videoItem; 