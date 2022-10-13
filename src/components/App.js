// import SimpleHome from "./SimpleHome";
import About from "./About";
import Location from "./Location";
import Reviews from "./Reviews";
import Secrets from "./Secrets";
import Footer from "./Footer";
import { React, useState, useEffect, useReducer } from "react";
import { StateContext } from "../utils/StateContext";
import { getPredictions } from "../services/predictionServices";
import { getCategories } from "../services/CategoryServices";
import Quiz from "./Quiz";
import ContactHook from "./ContactHook";
import BerriesHook from "./BerriesHook";
import { Routes, Route } from "react-router-dom";
import Container from "@mui/material/Container";
import Home from "./Home";
import NavBar from "./NavBar";
import NotFound from "./NotFound";
import ThankYouPage from "./ThankYouPage";
import JustBerry from "./JustBerry";
import reducer from "../utils/StateReducer";
import Predictions from "./Predictions";
import PredictionDetails from "./PredictionDetails";
import NewPrediction from "./NewPrediction";
import Login from "./Login";
import LoginBar from "./LoginBar";
import NewUser from "./NewUser";

const sections = [
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Location",
    url: "/location",
  },
  {
    title: "Reviews",
    url: "/reviews",
  },
  {
    title: "Secrets",
    url: "/secrets",
  },
  {
    title: "Would you like to know your fate?",
    url: "/quiz",
  },
  {
    title: "Berries",
    url: "/berries",
  },
  {
    title: "Contact",
    url: "/contact",
  },
  {
    title: "Predictions",
    url: "/predictions",
  }
];

function LoadingPage() {
  return <h1>Loading... 🚨</h1>;
}

function MainPage() {
  return (
    <div className="App">
      {/* <SimpleHome/> */}
      <Container maxWidth="lg">
      <LoginBar/>
        <NavBar
          title="Fateen's Fortune-Telling Chamber"
          sections={sections}
        ></NavBar>
      </Container>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="location" element={<Location />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="secrets" element={<Secrets />} />
        <Route path="quiz" element={<Quiz />} />
        <Route path="berries" element={<BerriesHook />} />
        <Route path="berries/:name" element={<JustBerry />} />
        <Route path="contact" element={<ContactHook />} />
        <Route path="thanks" element={<ThankYouPage />} />
        <Route path="predictions" element={<Predictions />} />
        <Route path="predictions/:id" element={<PredictionDetails />} />
        <Route path="predictions/update/:id" element={<NewPrediction />} />
        <Route path="predictions/new" element={<NewPrediction />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<NewUser />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer
        title={"Visit again."}
        description={
          "Whatever your problem may be, my fortune-telling shall lead to the solution."
        }
      />
    </div>
  );
}

function App() {
  const initialState = {
    categories: [],
    predictions: [],
    loggedInUser: sessionStorage.getItem("user") || null,
    auth: sessionStorage.getItem("token") || null
  };
  const [store, dispatch] = useReducer(reducer, initialState);

  // useState to create isLoading state
  const [isLoading, setIsLoading] = useState(true);

  const { loggedInUser } = store;


  useEffect(() => {
    if (!loggedInUser) {
      return;
    }
    getPredictions()
      .then((predictions) =>
        dispatch({ type: "setPredictions", data: predictions })
      )
      .catch((error) => console.log(error));

      getCategories()
      .then((categories) =>
        dispatch({ type: "setCategories", data: categories })
      )
      .catch((error) => console.log(error));
  }, [loggedInUser]);

  // useEffect Hook is like componentDidMount, componentDidUpdate
  // we use it so when page is updated we can load for 2 seconds
  useEffect(() => {
    if (isLoading) {
      // setTimeout for about 2 seconds then let isLoading to false
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  });

  return (
    <div>
      <StateContext.Provider value={{ store, dispatch }}>
        {isLoading ? <LoadingPage /> : <MainPage />}
      </StateContext.Provider>
    </div>
  );
}

export default App;
