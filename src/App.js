import React from "react";
import Nav from "./Nav";
import Header from "./Header";
import Features from "./Features";
import Tabs from "./Tabs";
import Box from "./Box";
import BoxContent from "./BoxContent";
import Faqs from "./Faqs";
import Subscribe from "./Subscribe";
import Footer from "./Footer";

//import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Features
        header={"Features"}
        text={
          "Our aim is to make it quick and easy for you to acess your favourite websites. Your bookmarks sync between your devices so you can access them on the go."
        }
      />
      <Tabs />
      <Features
        header={"Download the extension"}
        text={
          "We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to priotize."
        }
      />
      <BoxContent />
      <Features
        header={"Frequently asked Questions"}
        text={
          "Here are some of our FAQs.If you have any questions you'd to be like answered,Please feel free to email us."
        }
      />
      <Faqs />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
