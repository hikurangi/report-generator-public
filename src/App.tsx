import * as React from "react"
import Nav from "./nav"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const header = {
  margin: "50px auto"
};
const App = (): JSX.Element => (
  <Router>
    <main className="container">
      <section className="row" style={header}>
        <Nav />
      </section>
      <section className="row">
        <div className="twelve rows">
          <Switch>
            <Route exact path="/">
              <h1>HOME</h1>
            </Route>
            <Route path="/reports">
              <h1>reports</h1>
              {/* <Route path="/reports/new">
                <h1>new report</h1>
              </Route> */}
            </Route>
          </Switch>
        </div>
      </section>
    </main>
  </Router>
);

export default App;
