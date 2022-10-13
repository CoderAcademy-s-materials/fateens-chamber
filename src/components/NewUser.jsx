import { useNavigate } from "react-router-dom";
import { Box, Button } from "@mui/material";
import { register } from "../services/authServices";
import { useState } from "react";
import { useGlobalState } from "../utils/StateContext";


export default function NewUser() {
  const initialFormState = {
    name: "",
    username: "",
    email: "",
    password: "",
    password_confirmation: "",
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


  function handleRegister(event) {
    event.preventDefault();
    register(formState).then((data) => {
      let username = data.username;
      let token = data.token;
      sessionStorage.setItem("token", token);
      sessionStorage.setItem("user", username);
      dispatch({ type: "setLoggedInUser", data: username });
      dispatch({ type: "setToken", data: token });
      navigate("/");
    });
  }

  return (
    <>
      <Box>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formState.name}
          onChange={handleChange}
        ></input>

        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={formState.username}
          onChange={handleChange}
        ></input>

        <label>Email:</label>
        <input
          type="text"
          name="email"
          value={formState.email}
          onChange={handleChange}
        ></input>
      </Box>

      <Box>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formState.password}
          onChange={handleChange}
        ></input>

        <label>Password Confirmation:</label>
        <input
          type="password"
          name="password_confirmation"
          value={formState.password_confirmation}
          onChange={handleChange}
        ></input>
        <Button onClick={handleRegister}>Register</Button>
      </Box>
    </>
  );
}
