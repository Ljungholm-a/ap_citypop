import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import start from "./components/StartPage/StartPage";
import search from "./components/Search/Search";
import searchC from "./components/Search/SearchCountry";
import res from "./components/Result/Results";

const App = () => (
  <Router>
    <Route path="/" exact component={start} />
    <Route path="/search" component={search} />
    <Route path="/searchCountry" component={searchC} />
    <Route path="/result" component={res} />
  </Router>
);

export default App;
