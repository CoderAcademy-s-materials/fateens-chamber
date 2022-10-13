import fateenAPI from "../config/api"

// const predictions = [
//     {id: 1, description: "If you jump over six blades of grass, and then walk backwards to work, you will find a banana on your desk.", category_id: 1, created_at: "2022-01-11T01:33:50.019Z", updated_at: "2022-01-11T01:33:50.019Z", user_id: 1},
//     {id: 2, description: "Beware of the chicken in the back of your fridge.", category_id: 1, created_at: "2022-01-11T01:33:50.019Z", updated_at: "2022-01-11T01:33:50.019Z", user_id: 1},
//     {id: 3, description: "You threw 3 asparagus, which means you'll have 4 dogs.", category_id: 1, created_at: "2022-01-11T01:33:50.019Z", updated_at: "2022-01-11T01:33:50.019Z", user_id: 1},
//     {id: 4, description: "There is a star in your cup, this is a great sign.", category_id: 1, created_at: "2022-01-11T01:33:50.019Z", updated_at: "2022-01-11T01:33:50.019Z", user_id: 1}
// ]

function transformPrediction(prediction) {
    // console.log('prediction', prediction)
    let transformPrediction = {
        author: prediction.username, 
        category: prediction.category,
        posted: prediction.posted,
        description: prediction.description
    }
    // console.log('transformpredicrtion',transformPrediction)
    return transformPrediction;
}

export async function getPredictions() {
    const response = await fateenAPI.get('/api/predictions');
    // console.log(response)
    return response.data;
}


export async function getPrediction(id){
    const response = await fateenAPI.get(`/api/predictions/${id}`);
    let prediction = response.data;
    // console.log("get prediction", prediction);
    return prediction ? transformPrediction(prediction) : null;
}


export async function createPrediction(prediction) {
    const response = await fateenAPI.post('/api/predictions', prediction);
	// console.log(response.data);
	return response.data;
}

export async function deletePrediction(id) {
    const response = await fateenAPI.delete(`/api/predictions/${id}`);
	return response.data;
}

export async function updatePrediction(prediction) {
    let updatedPrediction = {
		description: prediction.description,
		category_id: prediction.category_id,
	}
	const response = await fateenAPI.put(`/api/predictions/${prediction.id}`, updatedPrediction);
	return response.data;
}





