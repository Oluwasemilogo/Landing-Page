import React from "react";
import Nav from "./Nav";
import Header from "./Header";
import Features from "./Features";
import Tabs from "./Tabs";
import Download from "./Download";

//import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Features />
      <Tabs />
      <Download />
    </div>
  );
}

export default App;
