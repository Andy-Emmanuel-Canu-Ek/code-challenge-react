import { LoginScreen } from "./LoginScreen";
import { RegisterScreen } from "./RegisterScreen";

export const MainLoginScreen = () => {
  return (
    <div className="container login-container">
      <div className="row">
        <LoginScreen />
        <div className="col-md-2"></div>
        <RegisterScreen />
      </div>
    </div>
  );
};
