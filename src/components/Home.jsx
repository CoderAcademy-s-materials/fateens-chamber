import React from "react";
import MainFeaturedPost from "./MainFeaturedPost";

const Home = () => {
    const mainFeaturedPost = {
        title: "Find what you seek, be it an object, person, or luck.",
        description: "Welcome to Fateen's Fortune-Telling Chamber.",
        image:"https://archives.bulbagarden.net/media/upload/4/4d/Fateen_Colo.png",
        imageText: "main image description",
      };
    return(
        <div>
            <MainFeaturedPost post={mainFeaturedPost}/>
        </div>
    )
}

export default Home;