import React from "react";
import Header from "./components/Header";
import Action from "./components/Action";
import Section from "./components/Section";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Beneficios from "./components/Beneficios";

function App() {
  return (
    <div className="App">
      <Header />
      <Action />
      <Section/>
      <Section2/> 
      <Section3/>
      <Beneficios/>
    </div>
  );
}

export default App;