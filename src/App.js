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
import Issues from "./pages/Issues";
import Comics from "./pages/Comics";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
const queryClient = new QueryClient();
function App() {
  return (
    <>
      <NavBar />
      <QueryClientProvider client={queryClient}>
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
          <Route path="/issues">
            <Issues />
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
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </QueryClientProvider>
    </>
  );
}

export default App;
