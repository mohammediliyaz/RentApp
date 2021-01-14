import "./App.css";
import Navigation from "./Components/NavigationComponent/Navigation";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import "./App.css";
import { Router, Switch, Route } from "react-router-dom";
import history from "../src/history";
import LandingPage from "./pages/LandingPage/LandingPage";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./Redux/Reducer/Reducer";

const store = createStore(reducer);

function App() {
  return (
    <div>
      <Provider store={store}>
        <Navigation />
        <Router history={history}>
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/" component={LandingPage} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
