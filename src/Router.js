import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AdditionalRoutes from "mini-router-npm-example";
import CustomErrorBoundary from "./pages/ErrorPage";
import LoadingPage from "./pages/LoadingPage";
import Home from "./pages/Home"; // priority load
import { DEBOUNCE, HOME } from "./constants/routes";

// If you want a load screen. START HERE
const DebounceExample = lazy(() => import("./pages/DebounceExample"));

function Router({ state, dispatch }) {
  return (
    <BrowserRouter>
      <CustomErrorBoundary>
        <Suspense fallback={<LoadingPage/>}>
          <Switch>
            <AdditionalRoutes/>
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
