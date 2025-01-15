import React, { useEffect } from "react";
import GlobalApi from "../Services/GlobalApi";

function Slider() {
  useEffect(() => {
    getTrendingMOvies();
  }, []);
  const getTrendingMOvies = () => {
    GlobalApi.getTrendingVideos.then((resp) => {
      console.log(resp);
    });
  };
  return <div>Slider</div>;
}

// export default Slider;
