import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Home = React.lazy(() => import("./pages/Home"));

let repeatingText = "";
for (let i = 0; i < 500; i++) repeatingText += "Osama Adam ";

const App: React.FC = () => {
  return (
    <Router>
      <h1 className="repeating-background-text">{repeatingText}</h1>
      <Suspense fallback={<div />}>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
