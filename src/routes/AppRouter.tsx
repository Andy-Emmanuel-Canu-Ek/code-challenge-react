import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { UserScreen } from "../components/user/UserScreen";
import { MainScreen } from "../components/auth/MainScreen";
import { CalendarScreen } from "../components/calendar/CalendarScreen";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/login" component={MainScreen} />
          <Route exact path="/usuario" component={UserScreen} />
          <Route exact path="/agenda" component={CalendarScreen} />
          <Route exact path="/" component={CalendarScreen} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};
