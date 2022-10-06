import React from "react";
import "../App.css";

const Card = (props) => {
  const {etag, items} = props.youtubeData;
  console.log(etag);
  console.log("res",items);
  return (
    <>
      <div className="card">
        {
          items?.map(element => 
            <div className="card_row">
            <div className="youtube_images">
                <img src={element?.snippet.thumbnails.medium.url} alt="" />
            </div>
           
           <div className="youtube_title">
            <div className="youtube_flex_channel">
              <img src={element?.snippet.thumbnails.medium.url} alt="" />
            </div>
            <div className="youtube_flex_channel">
              <h1>{element?.snippet.title}</h1>
            </div>
           </div>
           <div className="youtube_title_top">
              <h1>{element?.snippet.channelTitle}</h1>
            </div>
        </div>
          )
        }
      
      </div>
    </>
  );
};

export default Card;
