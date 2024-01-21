import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./Home";
import Navbar from "./Navbar";
import ErrorPage from "./ErrorPage";
import Summary from "./Summary";
import CreateBlog from "./CreateBlog";
function App() {
  return (
    <div className="height100">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/blogs/:id">
            <Summary />
          </Route>
          <Route exact path="/create">
            <CreateBlog />
          </Route>
          <Route path="*">
            <ErrorPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
