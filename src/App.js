import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home";
import FunFact from "./pages/FunFact";
import NotFound from "./pages/NotFound";
import { Route, Switch, Redirect } from "react-router-dom";
function App() {
  return (
    <>
      <NavBar />
      <Route path="/" exact>
        <Redirect to="/home" />
      </Route>
      <Route path="/home" exact>
        <Home />
      </Route>
      <Switch>
        <Route path="/fun-fact">
          <FunFact />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </>
  );
}

export default App;
