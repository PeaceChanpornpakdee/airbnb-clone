import React from "react";
import Header from "./components/Header";
import Menubar from "./components/Menubar";
// import Hero from "./components/Hero";
// import ShrinkingHeader from "./components/ShrinkingHeader";
import Listings from "./components/Listings";
import ChevronButton from "./components/ChevronButton";

const App = () => {
  return (
    <div>
      <Header />
      <Menubar />
      {/* <ShrinkingHeader /> */}
      {/* <Hero /> */}
      <ChevronButton onClick={() => console.log("Hi")} />
      <Listings />
    </div>
  );
};

export default App;
