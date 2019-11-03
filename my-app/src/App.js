import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Catering from "./pages/Catering";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Media from "./pages/Media";
import Menu from "./pages/Menu";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          {/* <Route exact path="/books/:id" component={Detail} />
            <Route component={NoMatch} />  */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
