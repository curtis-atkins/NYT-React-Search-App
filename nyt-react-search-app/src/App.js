import React from "react";
import Main from "./components/Main";
import Search from "./components/Search";
import Results from "./components/Results";
import Saved from "./components/Saved";

const App = () => 
  <div className="wrapper">
    <Main />
    <Search/>
    <Results/>
    <Saved/>
  </div>;

export default App;
