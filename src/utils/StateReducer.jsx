export default function reducer (state, action){
    switch(action.type){
        case 'setCategories': {
            return {
                ...state,
                categories: action.data
            }
        }

        case 'setPredictions': {
            return {
                ...state,
                predictions: action.data
            }
        }

        case 'addPrediction': {
            return {
                ...state,
                predictions: [action.data, ...state.predictions]
            }        
        }

        case 'deletePrediction': {
            const updatedPredictions = state.predictions.filter((prediction) => {
                return prediction.id !== parseInt(action.data)
            })
            return {
                ...state,
                predictions: updatedPredictions
            }        
        }

        case 'updatePrediction': {
            const prediction = state.predictions.find((prediction) => prediction.id == action.data.id)
            const updatedPrediction = Object.assign(prediction, action.data)

            const otherPredictions = state.predictions.filter((prediction) => prediction.id != action.data.id)
            return {
                ...state,
                predictions: [updatedPrediction, ...otherPredictions]
            }        
        }

        case 'setLoggedInUser': {
            return {
                ...state,
                loggedInUser: action.data
            }
        }

        case 'setToken': {
            return {
                ...state,
                auth: {
                    ...state.auth,
                    token: action.data
                }
            }
        }

        default: return state
    }
}