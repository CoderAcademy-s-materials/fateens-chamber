import { React, useReducer } from "react";
import ListItem from "./ListItem";
import ReviewInput from "./ReviewInput";
import reducer from "../utils/ReviewsReducer";

const initialReviews = [
  {
    title: "Mr. Duking",
    description:
      "I highly resepect Fateen. All the town citizens know about her.",
  },
  { title: "Pokemon trainer", description: "10/10 I caught them all!" },
  {
    title: "Town citizen",
    description:
      "I think she's alright. Her predictions are a little ominous - she said something about my Pikachu turning on me.",
  },
];

const Reviews = () => {
  const initialState = {
    reviews: initialReviews,
    isShowEditBox: false,
    editBoxMessage: "",
    selectedReviewId: null
  };

  // const [reviews, setReviews] = useState(initialReviews);

  const [store, dispatch] = useReducer(reducer, initialState);
  // store: current state state(reviews)
  // dispatch: function to change state (action)
  // reducer: can be any name as long as it's match with reducer function name

  const { reviews, isShowEditBox, editBoxMessage } = store; //I can just type 'review' instead of 'store.reviews'

  //isShowEditBox


  function setReviews(newReview) {
    dispatch({
      type: "setReviews",
      data: newReview, // pass to reduce file
    });
  }

  function deleteReview(id) {
    dispatch({
      type: "deleteReview",
      data: id,
    });
  }

  function editReview(id) {
    dispatch({
      type: "initialisedEditBox",
      data: id,
    });
  }

  function updateEditBoxMessage(e){
    let message = e.target.value;
    dispatch({
      type: 'updateEditBoxMessage',
      data: message //(data is a message) and send to reducer action
    })
  }

  function saveMessage(e){
    dispatch({
      type: 'saveMessage'
    })
  }

  const addReviews = (description) => {
    const newReview = {
      title: "Annoymous",
      description: description,
    };

    // setReviews(prev => prev.concat(newReview))
    // window.close()

    // setReviews(reviews.concat(newReview))
    setReviews(newReview);
  };

  return (
    <section id="reviews">
      <div>
        <h2>Reviews</h2>
        <a href="#top">Top</a>
      </div>
      <h3>Reviews from my customers!</h3>
      <ul>
        {reviews.map(({ title, description }, id) => (
          <div key={id}>
            <ListItem
              key={`${id}-item`}
              title={title}
              description={description}
            ></ListItem>
            <button key={`${id}-button`} onClick={() => deleteReview(id)}>
              Delete
            </button>
            <button key={`${id}-edit-button`} onClick={() => editReview(id)}>
              Edit
            </button>
          </div>
        ))}
      </ul>

      {isShowEditBox && (
        <>
          <h3>Edit the message below</h3>
          <textarea onChange={updateEditBoxMessage} value={editBoxMessage} row="4" cols="50"></textarea>
          <button onClick={saveMessage}>Save</button>
        </>
      )}

      <ReviewInput addReviews={addReviews} />
    </section>
  );
};

export default Reviews;
