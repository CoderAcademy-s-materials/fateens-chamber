// import SimpleHome from "./SimpleHome";
import About from "./About";
import Location from "./Location";
import Reviews from "./Reviews";
import Secrets from "./Secrets";
import Header from "./Header";
import Footer from "./Footer";
import {React, useState, useEffect} from "react";
import Quiz from "./Quiz";



function MainPage() {
  return (
    <div className="App">
      {/* <SimpleHome/> */}
      <Header />
      <About />
      <Location />
      <Reviews />
      <Secrets />
      <Quiz/>
      <Footer
        title={"Visit again."}
        description={
          "Whatever your problem may be, my fortune-telling shall lead to the solution."
        }
      />
    </div>
  );
}

function LoadingPage() {
  return <h1>Loading... 🚨</h1>;
}

function App() {
  // const queryParams = new URLSearchParams(window.location.search);
  // const isLoading = queryParams.get("loading");
  // console.log(isLoading);

  //1. use if-else condition
  // if(isLoading === "true"){
  //   // show loading page
  //   return (<h1>Loading... 🚨</h1>)
  // }else{
  //   // show the main page
  //   return (
  //     <div className="App">
  //       {/* <SimpleHome/> */}
  //       <Header />
  //       <About />
  //       <Location />
  //       <Reviews />
  //       <Secrets />
  //       <Footer title={"Visit again."} description={"Whatever your problem may be, my fortune-telling shall lead to the solution."} />
  //     </div>
  //   );
  // }

  // 2. one line
  // return (isLoading === "true" ? <LoadingPage /> : <MainPage />);


  // 3. Impkement a timer

  // useState to create isLoading state
  const [isLoading, setIsLoading] = useState(true)

  
  // useEffect Hook is like componentDidMount, componentDidUpdate
  // we use it so when page is updated we can load for 2 seconds
  useEffect(()=>{

    if(isLoading){
    // setTimeout for about 2 seconds then let isLoading to false
    setTimeout(()=>{
      setIsLoading(false)
    }, 2500);
  }


  })

  return (isLoading ? <LoadingPage /> : <MainPage />);


}

export default App;
