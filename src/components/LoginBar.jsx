import { Typography, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { logout } from "../services/authServices";
import { useGlobalState } from "../utils/StateContext";

export default function LoginBar (){
    let navigate = useNavigate();
    const {store, dispatch} = useGlobalState();
    const {loggedInUser} = store;

    function handleLogout(event) {
        event.preventDefault();
        logout().then(() => {
            dispatch({type: "setLoggedInUser", data: null});
            dispatch({type: "setToken", data: null});
    
        })
      }

    return (
        <Box display="flex" justifyContent="flex-end">
          {loggedInUser ? (
            <>
              <Typography m={2}>Hi {loggedInUser}</Typography>
              <Button onClick={handleLogout}>Logout</Button>
            </>
          ) : (
            <>
              <Button onClick={() => navigate("/login")}>Login</Button>
              <Button onClick={() => navigate("/register")}>Register</Button>
            </>
          )}
        </Box>
      );
}