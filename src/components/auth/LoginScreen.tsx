import React from "react";
import "../../css/loginStyles.css";
import {
  handleMessage,
  handleMessageError,
} from "../../helpers/handleMessages";
import { useForm } from "../../hooks/useForm";
import { login, register } from "../../services/authService";
import { useHistory } from "react-router-dom";

export const LoginScreen = ({ location }) => {
  const history = useHistory();

  const [formValuesLogin, handleInputChangeLogin] = useForm({
    lEmail: "example@gmail.com",
    lPassword: "123456",
  });

  const [formValuesRegister, handleInputChangeRegister] = useForm({
    rName: "example",
    rEmail: "example@gmail.com",
    rPassword: "123456",
    rPasswordConfirm: "123456",
  });

  const handleLogin: any = handleInputChangeLogin;
  const handleRegister: any = handleInputChangeRegister;

  const { lEmail, lPassword }: any = formValuesLogin;
  const {
    rName,
    rEmail,
    rPassword,
    rPasswordConfirm,
  }: any = formValuesRegister;

  const handleLoginSubmit = async (e: any) => {
    e.preventDefault();

    const { lEmail, lPassword }: any = formValuesLogin;

    console.log({ lEmail });
    const data = await login(lEmail, lPassword);
    if (data.ok) {
      handleMessage(data);
      history.push("/usuario");
    } else {
      handleMessageError(data);
    }

    // const data = login(lEmail, lPassword);
  };

  const handleRegisterSubmit = async (e: any) => {
    e.preventDefault();

    const {
      rName: name,
      rEmail: email,
      rPassword: password,
      rPasswordConfirm,
    }: any = formValuesRegister;

    const data = await register({
      name,
      email,
      password,
    });
    console.log(data);
    if (data.ok) {
      handleMessage(data);
      history.push("/usuario");
    } else {
      handleMessageError(data);
    }

  };

  return (
    <div className="container login-container">
      <div className="row">
        <div className="col-md-5 login-form-1">
          <h3>Ingreso</h3>
          <form onSubmit={handleLoginSubmit}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Correo"
                name="lEmail"
                value={lEmail}
                onChange={handleLogin}
              />
            </div>
            <br />
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Contraseña"
                name="lPassword"
                value={lPassword}
                onChange={handleLogin}
              />
            </div>
            <br />
            <div className="form-group">
              <input type="submit" className="btnSubmit" value="Login" />
            </div>
          </form>
        </div>
        <div className="col-md-2"></div>
        <div className="col-md-5 login-form-2">
          <h3>Registro</h3>
          <form onSubmit={handleRegisterSubmit}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Nombre"
                name="rName"
                value={rName}
                onChange={handleRegister}
              />
            </div>
            <br />
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Correo"
                name="rEmail"
                value={rEmail}
                onChange={handleRegister}
              />
            </div>
            <br />
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Contraseña"
                name="rPassword"
                value={rPassword}
                onChange={handleRegister}
              />
            </div>
            <br />
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Repita la contraseña"
                name="rPasswordConfirm"
                value={rPasswordConfirm}
                onChange={handleRegister}
              />
            </div>
            <br />
            <div className="form-group">
              <input type="submit" className="btnSubmit" value="Crear cuenta" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
