import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { LoginScreen } from "../components/auth/LoginScreen";
import { CalendarScreen } from "../components/calendar/CalendarScreen";
import { UserScreen } from "../components/user/UserScreen";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/login" component={LoginScreen} />
          <Route exact path="/usuario" component={UserScreen} />
          <Route exact path="/agenda" component={CalendarScreen} />
          <Route exact path="/" component={CalendarScreen} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};
