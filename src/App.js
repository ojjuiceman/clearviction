import logo from "./logo.svg";
import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
//component imports
import About from "./Pages/About";

import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Resources from "./Pages/Resources";
import Volunteer from "./Pages/Volunteer";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import CalculatorLanding from "./Pages/CalculatorLanding";
import CalculatorQuestion from "./Pages/CalculatorQuestion";
import CalculatorQuestionCont from "./Pages/CalculatorQuestionCont";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route exact path="/calculator">
          <CalculatorLanding />
        </Route>
        <Route path="/resources">
          <Resources />
        </Route>
        <Route path="/volunteer">
          <Volunteer />
        </Route>
        <Route path="/calculator">
          <CalculatorQuestionCont />
        </Route>
        {/* <Route path="/calculator/:number">
          <CalculatorQuestion />
        </Route> */}
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
