import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import { MainLoginScreen } from "../components/auth/MainLoginScreen";
import { MainRouter } from "./MainRouter";
import { PublicRouter } from "./PublicRouter";
import { PrivateRouter } from "./PrivateRouter";
import { useSelector } from "react-redux";

export const AppRouter = () => {

  const {user_id} = useSelector((state: any) => state.auth)
  return (
    <Router>
      <div>
        <Switch>
          <PublicRouter  isAuth={!!user_id} path="/login" component={MainLoginScreen} />
          <PrivateRouter isAuth={!!user_id} path="/" component={MainRouter} />
        </Switch>
      </div>
    </Router>
  );
};
