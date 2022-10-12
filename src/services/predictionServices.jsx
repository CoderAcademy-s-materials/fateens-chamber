const predictions = [
    {id: 1, description: "If you jump over six blades of grass, and then walk backwards to work, you will find a banana on your desk.", category_id: 1, created_at: "2022-01-11T01:33:50.019Z", updated_at: "2022-01-11T01:33:50.019Z", user_id: 1},
    {id: 2, description: "Beware of the chicken in the back of your fridge.", category_id: 1, created_at: "2022-01-11T01:33:50.019Z", updated_at: "2022-01-11T01:33:50.019Z", user_id: 1},
    {id: 3, description: "You threw 3 asparagus, which means you'll have 4 dogs.", category_id: 1, created_at: "2022-01-11T01:33:50.019Z", updated_at: "2022-01-11T01:33:50.019Z", user_id: 1},
    {id: 4, description: "There is a star in your cup, this is a great sign.", category_id: 1, created_at: "2022-01-11T01:33:50.019Z", updated_at: "2022-01-11T01:33:50.019Z", user_id: 1}
]

function transformPrediction(prediction) {
    console.log('prediction', prediction)
    let transformPrediction = {
        author: prediction.user_id, 
        category: prediction.category_id,
        posted: prediction.created_at,
        description: prediction.description
    }
    console.log('transformpredicrtion',transformPrediction)
    return transformPrediction;
}

export async function getPredictions() {
    return predictions;
}


export async function getPrediction(id){
    const prediction = predictions.find(prediction => prediction.id.toString() === id.toString())
    return prediction ? transformPrediction(prediction) : null
}


export async function createPrediction(prediction) {
    return prediction;
}

export async function deletePrediction(id) {
    return id;
}

export async function updatePrediction(prediction) {
    return prediction;
}





