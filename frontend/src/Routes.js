import { createBrowserHistory } from "history";
import { Router, Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./screens/home/Home";
import Team from "./screens/team/Team";
import Courses from "./screens/courses/Courses";
import CourseOverview from "./screens/courses/CourseOverview";

const Routes = (props) => {
  const history = createBrowserHistory();

  return (
    <BrowserRouter history={history}>
      <Switch>        
        <Route path="/home" component={Home} exact />
        <Route path="/team" component={Team} exact />
        <Route path="/courses" component={Courses} exact />
        <Route path="/courses/:id" component={CourseOverview} exact />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
