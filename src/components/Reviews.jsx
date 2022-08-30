import {React, useState} from "react";
import ListItem from "./ListItem";
import ReviewInput from "./ReviewInput"


const initialReviews = [
  { title: "Mr. Duking", description: "I highly resepect Fateen. All the town citizens know about her." },
  { title: "Pokemon trainer", description: "10/10 I caught them all!" },
  {
    title: "Town citizen",
    description: "I think she's alright. Her predictions are a little ominous - she said something about my Pikachu turning on me.",
  }
];


const Reviews = () => {
  const [reviews, setReviews] = useState(initialReviews);
  
  const addReviews = (description)=>{
    
    const newReview = {
      title: "Annoymous",
      description: description
    };

    // 1. Use spread syntax - it works
    // setReviews(prevReviews => [...prevReviews, newReview])

    // 2. Use push - it doesn't work because push returns a number
    //const number = reviews.push(newReview);
    //console.log("Number:", number);
    // setReviews(prevReviews => prevReviews.push(newReview))

    // 3. Use concat

    setReviews(prev => prev.concat(newReview))
    window.close()


  }
  
  return (
    <section id="reviews">
      <div>
        <h2>Reviews</h2>
        <a href="#top">Top</a>
      </div>
      <h3>Reviews from my customers!</h3>
      <ul>
        {reviews.map(({ title, description }, id) => (
          <ListItem key={id} title={title} description={description}></ListItem>
        ))}
      </ul>

          <ReviewInput addReviews={addReviews}/>
      
    </section>
  );
};

export default Reviews;
