import { Typography } from "@mui/material";
import { useGlobalState } from "../utils/StateContext";
import { Link, useNavigate } from "react-router-dom";

export default function Predictions() {
  const { store } = useGlobalState();
  const { predictions, loggedInUser } = store;

  let navigate = useNavigate();
  if (!predictions) return "null";

  return (
    <div>
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
    </div>
  );
}
