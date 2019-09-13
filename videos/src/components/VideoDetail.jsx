import "../styles/VideoItem.css";
import React from "react";

const VideoDetail = ({ video }) => {
   if (!video) {
      return (
         <div className="ui segment video-loading">
            <div className="ui active inverted dimmer">
               <div className="ui text loader">Loading</div>
            </div>
         </div>
      );
   }

   const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

   return (
      <div className="ui segment">
         <div className="ui embed">
            <iframe src={videoSrc} frameBorder="0" title="Video Player" />
         </div>
         <h4 className="ui header">{video.snippet.title}</h4>
         <p>{video.snippet.description}</p>
      </div>
   );
};

export default VideoDetail;
