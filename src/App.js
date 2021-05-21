import React from "react";

import './App.css';
import Blog from "./component/blog/Blog";
import Bloodmoon from "./component/bloodmoon/Bloodmoon";
import Faq from "./component/faq/Faq";
import Navbar from "./component/navbar/Navbar";
import Team from "./component/team/Team";
import Product from "./component/product/Product";
import Service from "./component/service/Service";
import Home from "./component/home/Home";

import {
  BrowserRouter as Router,
  Switch,
  Route,

} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/Home" exact component={Home} />
          <Route path="/Blog" component={Blog} />
          <Route path="/Bloodmoon" component={Bloodmoon} />
          <Route path="/Team" component={Team} />
          <Route path="/Product" component={Product} />
          <Route path="/Service" component={Service} />
          <Route path="/Faq" component={Faq} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
