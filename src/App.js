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
import "./App";
// const store = createStore(reducer);

function App() {
  return (
    <div>
      <div className="circle1"></div>
      <div className="circle2"></div>
      <div className="circle7"></div>
      <div className="circle8"></div>
      <div className="circle9"></div>
      <div className="circle3"></div>
      <div className="circle4"></div>
      <div className="circle5"></div>
      <div className="circle6"></div>
      <Navigation />
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/Contact" exact component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
