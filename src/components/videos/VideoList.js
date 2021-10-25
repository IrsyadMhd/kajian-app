import React from "react";

import VideoItem from "./VideoItem";
import classes from "./VideoList.module.css";

function VideoList({ videos, onClick }) {
  return (
    <ul className={classes.row__list}>
      {videos.map((item) => (
        <VideoItem
          key={item.id.videoId}
          id={item.id.videoId}
          item={item.snippet}
          onClick={onClick}
        />
      ))}
    </ul>
  );
}

export default VideoList;
