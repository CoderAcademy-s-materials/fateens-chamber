export default function reducer(state, action) {
    
    switch(action.type){
        // this action is for update reviews
        case "setReviews": { //action name 
            return  {
                ...state,
                // reviews: action.data // from dispatch
                reviews: [...state.reviews, action.data]
            }
        }
        case "deleteReview": {
            return{
                ...state,
                reviews: state.reviews.filter((review, id) => id !== action.data)
                // reviews: [
                //         ...state.reviews.slice(0, action.data),
                //         ...state.reviews.slice(action.data+1)
                //     ]
            }
        }
        case "initialisedEditBox": {
            return{
                ...state,
                isShowEditBox: true,
                editBoxMessage: state.reviews[action.data].description,
                selectedReviewId: action.data
             }
        }
        case "updateEditBoxMessage":{
            return{
                ...state,
                editBoxMessage: action.data,
                
             }
        }
        case 'saveMessage': {
            const updateReviews = state.reviews;
            updateReviews[state.selectedReviewId].description = state.editBoxMessage

            return {
                ...state,
                reviews: updateReviews,
                isShowEditBox: false
            }
        }

        default: return state;
    }
}