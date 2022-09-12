export default function reducer(state, action){
    switch(action.type){
        case "setFormData": {
            return {
                ...state,
                [action.data.name]: action.data.value
            }
        }
        case "setUserMessage":{
            return{
                ...state,
                userMessage: action.data
            }
        }
        default: return state
    }
}