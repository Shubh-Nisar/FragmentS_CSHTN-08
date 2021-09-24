import { createBrowserHistory } from "history";
import { Router, Switch, Route, BrowserRouter } from "react-router-dom";
import Temp from "./admin/Temp";
import SignInSide from "./screens/signIn/signIn";
import SignUp from "./screens/signUp/signUp";
import Home from "./screens/home/Home";
import Courses from "./screens/courses/Courses";
import Team from "./screens/team/Team";
// import VideoScreen from "./screens/video/VideoScreen";
import Example from "../src/leaderBoard/leader.js";
import Quiz from "./screens/quiz/Quiz";
import AdminLogin from "./admin/screens/login/AdminLogin";
import NotFound from "./screens/404/NotFound";
import CodeEditor from "./screens/CodeEditor.js";
import Reports from "./screens/report/Reports";
import UploadCourse from "./admin/screens/upload_course/UploadCourse";
import CourseOverview from "./screens/courses/CourseOverview";
import QuestionCard from "./components/quiz/QuestionCard";
import TodoTemp from "./screens/todo/TodoTemp";

const Routes = (props) => {
  const history = createBrowserHistory();

  return (
    <BrowserRouter history={history}>
      <Switch>
        <Route path="/admin" component={Temp} exact />
        <Route path="/login" component={SignInSide} exact />
        <Route path="/register" component={SignUp} exact />
        <Route path="/courses" component={Courses} exact />
        <Route path="/courses/:courseId/quiz" component={Quiz} exact />
        <Route path="/team" component={Team} exact />
        <Route path="/leaderBoard" component={Example} exact />
        <Route path="/courses/:id" component={CourseOverview} exact />
        {/* <Route path="/video/:id" component={VideoScreen} exact /> */}
        <Route path="/admin/upload/course" component={UploadCourse} exact />
        <Route path="/editor" exact component={CodeEditor}/>
        <Route path="/admin/upload_course" component={UploadCourse} exact />
        <Route path="/adminlogin" component={AdminLogin} exact />
        <Route path="/reports" component={Reports} exact />
        <Route path="/editor" exact component={CodeEditor} />
        <Route path="/admin/upload_course" component={UploadCourse} exact />
        <Route path="/adminlogin" component={AdminLogin} exact />
        <Route path="/reports" component={Reports} exact />
        <Route path="/" component={Home} exact />
        <Route path="/notes" component={TodoTemp} exact/>
        <Route path="/:anything" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
