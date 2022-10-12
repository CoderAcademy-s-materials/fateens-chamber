import { Typography } from "@mui/material";
import { useGlobalState } from "../utils/StateContext";
import { Link } from "react-router-dom";

export default function Predictions() {
    const {store} = useGlobalState();
    const {predictions, loggedInUser} = store;
    if (!predictions) return "null";

    return (
        <div>
            <Typography>Your predictions page!</Typography>
            {predictions.map((prediction, index)=> {
                return (
                    <Link key={prediction.id} to={`/predictions/${prediction.id}`}>
                        <Typography>{prediction.description}</Typography>
                    </Link>
                )
            })}
        </div>

    )
    
}