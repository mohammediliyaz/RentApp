import "./App.css";
import Navigation from "./Components/NavigationComponent/Navigation";

import Contact from "./pages/Contact/Contact";
import "./App.css";
import { Router, Switch, Route } from "react-router-dom";
import history from "../src/history";
import LandingPage from "./pages/LandingPage/LandingPage";
// import { createStore } from "redux";
// import { Provider } from "react-redux";
// import reducer from "./Redux/Reducer/Reducer";

// const store = createStore(reducer);

function App() {
  return (
    <div>
      <Navigation />
      <Router history={history}>
        <Switch>
          <Route path="/" component={LandingPage} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
