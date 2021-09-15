import * as React from "react";
import { Link } from "gatsby";
import backgroundClip from "./clip/marvel_clip.mp4";

// markup
const IndexPage = () => {
  return (
    <React.Fragment>
      <video
        className="home-fullscreen-clip"
        height="100%"
        width="100%"
        loop
        muted
        autoPlay
      >
        <source src={backgroundClip} type="video/mp4" />
      </video>
      <main class="bg-black bg-opacity-90">
        <title>Home Page</title>
        <div class="flex h-screen">
          <div class="m-auto text-white">
            <h3 class="text-7xl font-semibold my-4">
              Welcome to Gatsbelistical
            </h3>
            <Link class="bg-red-800 hover:bg-red-500 p-3 my-4" to="/home">
              ENTER SITE
            </Link>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default IndexPage;
