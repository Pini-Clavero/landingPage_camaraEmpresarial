import React from "react";
import { CssBaseline } from "@mui/material";

import Header from "./components/Header";
import Action from "./components/Action";
import Section from "./components/Section";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Beneficios from "./components/Beneficios";
import Interesar from "./components/Interesar";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Header />
      <Action />
      <Section/>
      <Section2/> 
      <Section3/>
      <Beneficios/>
      <Interesar/>
    </div>
  );
}

export default App;