import React from "react";
import Header from "./components/Header";
import Menubar from "./components/Menubar";
// import Hero from "./components/Hero";
import Listings from "./components/Listings";

const App = () => {
  return (
    <div>
      <Header />
      <Menubar />
      {/* <Hero /> */}
      <Listings />
    </div>
  );
};

export default App;
