import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home";
import FunFact from "./pages/FunFact";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import Merch from "./pages/Merch";
import ModernEra from "./pages/ModernEra";
import { Route, Switch, Redirect } from "react-router-dom";
import ClassicEra from "./pages/ClassicEra";
import Specials from "./pages/Specials";

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
        <Route path="/merch">
          <Merch />
        </Route>
        <Route path="/classic">
          <ClassicEra />
        </Route>
        <Route path="/modern">
          <ModernEra />
        </Route>
        <Route path="/specials">
          <Specials />
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
