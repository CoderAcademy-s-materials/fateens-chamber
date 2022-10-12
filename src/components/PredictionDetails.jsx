import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Button } from "@mui/material";
import { useGlobalState } from "../utils/StateContext";
import {
    deletePrediction,
    getPrediction,
  } from "../services/predictionServices";




export default function PredictionDetails() {
    const [prediction, setPrediction] = useState(null);

    let navigate = useNavigate();
    const { id } = useParams();
    const {store, dispatch} = useGlobalState();

    // use .then because async function
    function handleDelete() {
        deletePrediction(id).then(() => {
          dispatch({ type: "deletePrediction", data: id });
          navigate(-1); // back button
        });
    }

    useEffect(() => {
		getPrediction(id)
		.then((prediction) => setPrediction(prediction))
		.catch((error) => console.log(error))
	},[id]) // fetch only get id once

    if (!prediction) return null;

    return (
        <div>
            <p>Posted by: {prediction.author}</p>
            <p>Posted on: {prediction.posted}</p>
            <p>Category: {prediction.category}</p>
            <p>{prediction.description}</p>

            <Box>
            <Button onClick={() => navigate(`/predictions/update/${id}`)}>   {/* id is from useParams */}
                Update
            </Button>
            <Button onClick={handleDelete}>Delete</Button>
            </Box>
        </div>
    )
}