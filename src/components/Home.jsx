import React from "react";
import MainFeaturedPost from "./MainFeaturedPost";

const Home = () => {
    const mainFeaturedPost = {
        title: "Find what you seek, be it an object, person, or luck.",
        description: "Welcome to Fateen's Fortune-Telling Chamber.",
        image:"//tcg.pokemon.com/assets/img/expansions/vivid-voltage/header/en-us/swsh-large-fallback.jpg",
        imageText: "main image description",
      };
    return(
        <div>
            <MainFeaturedPost post={mainFeaturedPost}/>
        </div>
    )
}

export default Home;