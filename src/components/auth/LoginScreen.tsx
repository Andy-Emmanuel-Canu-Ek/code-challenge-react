import Swal from 'sweetalert2'
import validator from 'validator'
import "../../css/loginStyles.css";
import {
  handleMessage,
  handleMessageError,
} from "../../helpers/handleMessages";
import { useForm } from "../../hooks/useForm";
import { useHistory } from "react-router-dom";
import { login } from "../../services/authService";

export const LoginScreen = () => {
  const history = useHistory();

  const [formValuesLogin, handleInputChangeLogin] = useForm({
    lEmail: "example@gmail.com",
    lPassword: "123456",
  });

  const handleLogin: any = handleInputChangeLogin;

  const { lEmail, lPassword }: any = formValuesLogin;

  const handleLoginSubmit = async (e: any) => {
    e.preventDefault();
    const {isValid, formData} = validateForm();
    
    if(!isValid){
      return
    }

    const data = await login(formData);
    if (data.ok) {
      handleMessage(data);
      history.push("/usuario");
    } else {
      handleMessageError(data);
    }
  };

  const validateForm = () => {
    let isValid = true;

    const { lEmail: email, lPassword: password }: any = formValuesLogin;

    if(!validator.isEmail(email)){
      Swal.fire('Advertencia', "El email no es válido", "warning");
      isValid = false;
    }

    const formData: Object = {email, password};
    return { isValid, formData}
  }


  return (
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
  );
};
