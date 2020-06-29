import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import TourList from "./Components/TourList";
import "./App.scss";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <TourList />
    </React.Fragment>
  );
}

export default App;
