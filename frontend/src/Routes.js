import { createBrowserHistory } from "history";
import { Router, Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./screens/home/Home";

const Routes = (props) => {
  const history = createBrowserHistory();

  return (
    <BrowserRouter history={history}>
      <Switch>        
        <Route path="/home" component={Home} exact />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
