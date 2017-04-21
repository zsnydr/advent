import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './header';
import Nav from './nav';
import Home from '../home/home';
import NewArrivals from '../newArrivals/newArrivals';
import Shop from '../shop/shop';
import Blog from '../blog/blog';
import Contact from '../contact/contact';
import Footer from './footer';

const Routes = () => (
  <Router>
    <div>
      <Route path="/" component={Header} />
      <Route path="/" component={Nav} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/arrivals" component={NewArrivals} />
        <Route path="/shop" component={Shop} />
        <Route path="/blog" component={Blog} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Route path="/" component={Footer} />
    </div>
  </Router>
);

export default Routes;
