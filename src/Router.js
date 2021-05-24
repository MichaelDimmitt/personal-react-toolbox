import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CustomErrorBoundary from "./pages/ErrorPage";
import LoadingPage from "./pages/LoadingPage";
import Home from "./pages/Home/src/index.js"; // priority load
import { DEBOUNCE, HOME } from "./constants/routes";
const {Suspense} = React

// If you want a load screen. START HERE
const DebounceExample = React.lazy(() => import("./pages/DebounceExample"));

function Router({ state, dispatch }) {
  return (
    <BrowserRouter>
      <CustomErrorBoundary>
        <Suspense fallback={<LoadingPage/>}>
          <Switch>
            <Route
              exact path={HOME}  
            >
              <Home />
            </Route>
            <Route 
              path={DEBOUNCE} 
            >
              <DebounceExample />
            </Route>
            <Route
              path={HOME}  
            >
              <Home />
            </Route>
          </Switch>
        </Suspense>
      </CustomErrorBoundary>
    </BrowserRouter>
  );
}

export default Router;
