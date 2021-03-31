import React from "react";
import { Redirect, Route, Switch } from "react-router";
import { NavbarScreen } from "../components/ui/NavbarScreen";

import { UserScreen } from "../components/user/UserScreen";
import { CalendarScreen } from "../components/calendar/CalendarScreen";

export const MainRouter = () => {
  return (
    <>
      <NavbarScreen />
      <div className="card">
        <div className="card-body">
          <Switch>
            <Route exact path="/usuario" component={UserScreen} />
            <Route exact path="/agenda" component={CalendarScreen} />
            <Route exact path="/" component={UserScreen} />
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    </>
  );
};
