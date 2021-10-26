import { useState } from "react";

import "./App.css";
import Row from "./components/Row";
import request from "./request";
import Banner from "./components/Banner";
import YouTube from "react-youtube";

function App() {
  const [videoId, setVideoId] = useState(null);

  const clickHandler = (vidId) => {
    if (videoId) {
      setVideoId(null);
    }
    setVideoId(vidId);
  };

  return (
    <div className="App">
      <Banner />
      <div className="grad"></div>
      {videoId && (
        <YouTube
          className="mb-2"
          videoId={videoId}
          opts={{
            height: "390",
            width: "100%",
            playerVars: {
              autoplay: 1,
              controls: 1,
            },
          }}
        />
      )}
      <Row
        title="Ustadz Firanda Andirja"
        fetchUrl={request.fetchUstFiranda}
        onClick={clickHandler}
      />
      <Row
        title="Ustadz Nuzul Dzikri"
        fetchUrl={request.fetchUstNuzul}
        onClick={clickHandler}
      />
      <Row
        title="Buya Elvi Syam"
        fetchUrl={request.fetchUstElvi}
        onClick={clickHandler}
      />
      <Row
        title="Yufid TV"
        fetchUrl={request.fetchYufid}
        onClick={clickHandler}
      />
      <Row
        title="Rodja TV"
        fetchUrl={request.fetchRodjaTv}
        onClick={clickHandler}
      />
    </div>
  );
}

export default App;
