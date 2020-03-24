import React from "react";
// import third party
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Switch, Route } from "react-router-dom";
// import pages
import Home from "../main/Home";
import Contact from "../main/Contact";
import Shop from "../main/Shop";
import Inspiration from "../main/Inspiration";
import FrameItem from "../main/FrameItem";
import Wishlist from "../main/Wishlist";
const Routes = () => {
  return (
    <Route
      render={({ location }) => (
        <TransitionGroup>
          <CSSTransition key={location.key} timeout={300} classNames="item">
            <Switch location={location}>
              <Route exact path="/" component={Home} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/shop" component={Shop} />
              <Route exact path="/inspiration" component={Inspiration} />
              <Route exact path="/shop/:id" component={FrameItem} />
              <Route exact path="/wishlist" component={Wishlist} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )}
    />
  );
};
export default Routes;
