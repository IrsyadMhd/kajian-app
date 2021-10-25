import React from "react";

import classes from "./VideoItem.module.css";

function VideoItem({ item, onClick, id }) {
  return (
    <li className={classes.row__item} onClick={() => onClick(id)}>
      <img src={item.thumbnails.medium.url} alt={item.title} />
    </li>
  );
}

export default VideoItem;
