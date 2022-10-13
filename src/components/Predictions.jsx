import { Typography } from "@mui/material";
import { useGlobalState } from "../utils/StateContext";
import { Link, useNavigate } from "react-router-dom";
import { getPredictions } from "../services/predictionServices";
import { useEffect } from "react";

export default function Predictions() {
  const { store, dispatch } = useGlobalState();
  const { predictions, loggedInUser } = store;

  let navigate = useNavigate();

  useEffect(() => {
    if (!loggedInUser) {
      return;
    }

    getPredictions()
      .then((predictions) =>
        dispatch({ type: "setPredictions", data: predictions })
      )
      .catch((error) => console.log(error));
  }, [loggedInUser, dispatch]);


  return (
    <div>
      {loggedInUser ? (
        <>
          <Typography>Your predictions page!</Typography>
          {predictions.map((prediction, index) => {
            return (
              <Link key={prediction.id} to={`/predictions/${prediction.id}`}>
                <Typography>{prediction.description}</Typography>
              </Link>
            );
          })}
          <button onClick={() => navigate("/predictions/new")}>
            Add Prediction
          </button>
        </>
      ) : (
        <>
          <Typography>Please login.</Typography>
        </>
      )}
    </div>
  );
}
