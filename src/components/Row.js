import { useEffect, useState } from "react";

import axios from "../axios";
import VideoList from "./videos/VideoList";
import classes from "./Row.module.css";

function Row({ title, fetchUrl, onClick }) {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const {
          data: { items },
        } = await axios.get(fetchUrl);
        setVideos(items);
      } catch (err) {
        setVideos("");
      }
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className={classes.row}>
      <h2 className={classes.row__title}>{title}</h2>
      {videos && <VideoList videos={videos} onClick={onClick} />}
      {!videos && <p className={classes.error}>Maaf, Server Error!!</p>}
    </div>
  );
}

export default Row;
