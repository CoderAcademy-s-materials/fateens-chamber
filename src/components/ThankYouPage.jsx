import React from "react";
import MainFeaturedPost from "./MainFeaturedPost";

const ThankYouPage = () => {
    const mainFeaturedPost = {
        title: "Thank you!",
        description: "Your post was awesome!",
        image:"https://halegrafx.com/wp-content/uploads/2014/06/pokemon-thank-you-card.jpg?491598",
        imageText: "main image description",
      };
    return(
        <div>
            <MainFeaturedPost post={mainFeaturedPost}/>
        </div>
    )
}

export default ThankYouPage;