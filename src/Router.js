import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage"
import LoadingPage from "./pages/LoadingPage"
import Home from "./pages/Home"; // priority load

// If you want a load screen. START HERE
const DebounceExample = lazy(() => import("./pages/DebounceExample"));

function Router() {
  return (
    <BrowserRouter>
      <ErrorPage>
        <Suspense fallback={<LoadingPage/>}>
          <Switch>
            <Route exact path="/" >
              <Home />
            </Route>
            <Route path="/debounce" >
              <DebounceExample />
            </Route>
            <Route path="/" >
              <Home />
            </Route>
          </Switch>
        </Suspense>
      </ErrorPage>
    </BrowserRouter>
  );
}

export default Router;

