import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/authServices";
import { useGlobalState } from "../utils/StateContext";
import { Button } from "@mui/material";


export default function Login() {
  const initialFormState = {
    email: "",
    password: "",
  };
  const [formState, setFormState] = useState(initialFormState);

  const { dispatch } = useGlobalState();
  let navigate = useNavigate();

  function handleChange(event) {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  }


  function handleSubmit(event) {
    event.preventDefault();

    login()
      .then((data) => {
        let username = data.username;
        let token = data.token;
        dispatch({ type: "setLoggedInUser", data: username });
        dispatch({ type: "setToken", data: token });
        navigate("/");
      })
      .catch((error) => console.log(error));
  }

  return (
    <div>
      <label>Email:</label>
      <input
        type="email"
        name="email"
        value={formState.username}
        onChange={handleChange}
      ></input>
      <label>Password:</label>
      <input
        type="password"
        name="password"
        value={formState.password}
        onChange={handleChange}
      ></input>
      <Button onClick={handleSubmit}>Login</Button>
    </div>
  );
}
