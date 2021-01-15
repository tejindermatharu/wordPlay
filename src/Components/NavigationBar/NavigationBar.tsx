import * as React from "react";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Search from "../../Pages/Search";
import WordMatch from "../../Pages/WordMatch";
import "./NavigationBar.scss";

export default function NavigationBar() {
  return (
    <Router>
      <Navbar className="nav-bar">
        <Nav>
          <Nav className="ml-auto">
            <NavItem>
              {" "}
              <Link className="nav-link" to="/">
                Word Match
              </Link>{" "}
            </NavItem>
            <NavItem>
              {" "}
              <Link className="nav-link" to="/search">
                Play
              </Link>{" "}
            </NavItem>
          </Nav>
        </Nav>
      </Navbar>
      <div className="main">
        <Switch>
          <Route exact path="/">
            <WordMatch />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
