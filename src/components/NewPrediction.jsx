import { Typography, Button } from "@mui/material";
import { useGlobalState } from "../utils/StateContext";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  createPrediction,
  updatePrediction,
} from "../services/predictionServices";

export default function NewPrediction() {
  const initialFormState = {
    category_id: 1,
    description: "",
  };
  const [formState, setFormState] = useState(initialFormState);

  const { dispatch, store } = useGlobalState();
  const { categories } = store;

  let { id } = useParams();
  let navigate = useNavigate();

  function handleChange(event) {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  }

  function handleClick(event) {
    event.preventDefault();
    if (id) {
      updatePrediction({ id: id, ...formState }) // pass formState to id
        .then(() => {
          dispatch({
            type: "updatePrediction",
            data: { id: id, ...formState },
          });
          navigate(`/predictions/${id}`);
        })
        .catch((error) => console.log(error));
    } else {
      createPrediction({ ...formState })
        .then((prediction) => {
          dispatch({ type: "addPrediction", data: prediction });
          navigate("/predictions");
        })
        .catch((error) => console.log(error));
    }
  }

  return (
    <div>
      <Typography>Category:</Typography>
      <select
        name="category_id"
        value={formState.category_id}
        onChange={handleChange}
      >
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>

      <Typography>Prediction:</Typography>
      <input
        type="text"
        name="description"
        value={formState.description}
        onChange={handleChange}
      ></input>
      <Button onClick={handleClick}>{id ? "Update" : "Create"}</Button>
    </div>
  );
}
