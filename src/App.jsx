import { Route, Switch } from "react-router-dom";
import "./App.css";

import PageContent from "./layouts/PageContent";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <PageContent />
      </Route>
    </Switch>
  );
}

export default App;
