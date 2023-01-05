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
import ComicRelief from "./pages/ComicRelief";
import Comics from "./pages/Comics";
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
        <Route path="/comic-relief">
          <ComicRelief />
        </Route>
        <Route path="/comics">
          <Comics />
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
      </Switch>
    </>
  );
}

export default App;
