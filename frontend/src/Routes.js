import { createBrowserHistory } from "history";
import { Router, Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./screens/home/Home";
import Team from "./screens/team/Team";
import Courses from "./screens/courses/Courses";
import CourseOverview from "./screens/courses/CourseOverview";
import Quiz from "./screens/quiz/Quiz";
import NotFound from "./screens/404/NotFound";

const Routes = (props) => {
  const history = createBrowserHistory();

  return (
    <BrowserRouter history={history}>
      <Switch>        
        <Route path="/home" component={Home} exact />
        <Route path="/team" component={Team} exact />
        <Route path="/courses" component={Courses} exact />
        <Route path="/courses/:id" component={CourseOverview} exact />
        <Route path="/courses/:courseId/quiz" component={Quiz} exact />
        <Route path="/:anything" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
