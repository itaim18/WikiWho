import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home";
import FunFact from "./pages/FunFact";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import { Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home" exact>
          <Home />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/fun-fact">
          <FunFact />
        </Route>
        <Route path="/*">
          <NotFound />
        </Route>
      </Switch>{" "}
      <canvas
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
      ></canvas>
    </>
  );
}

export default App;
