import validator from 'validator'
import { useForm } from "../../hooks/useForm";
import { register } from "../../services/authService";
import {
  handleMessage,
  handleMessageError,
} from "../../helpers/handleMessages";
import Swal from 'sweetalert2';

export const RegisterScreen = () => {
  const [formValuesRegister, handleInputChangeRegister] = useForm({
    rName: "example",
    rEmail: "example@gmail.com",
    rPassword: "123456",
    rPasswordConfirm: "123456",
  });

  const handleRegister: any = handleInputChangeRegister;

  const {
    rName,
    rEmail,
    rPassword,
    rPasswordConfirm,
  }: any = formValuesRegister;

  const handleRegisterSubmit = async (e: any) => {
    e.preventDefault();

    const {isValid, formData} = validateForm();
    
    if(!isValid){
      return
    }

    const data = await register(formData);

    if (data.ok) {
      handleMessage(data);
    } else {
      handleMessageError(data);
    }
  };

  const validateForm = () => {
    let isValid = true;

    const {
      rName: name,
      rEmail: email,
      rPassword: password,
      rPasswordConfirm: passwordConfirm,
    }: any = formValuesRegister;

    if(validator.isEmpty(name.toString().trim())){
      Swal.fire('Advertencia', "Es necesario agregar un nombre", "warning");
      isValid = false;
    }

    if(!validator.isEmail(email)){
      Swal.fire('Advertencia', "El email no es válido", "warning");
      isValid = false;
    }

    if(!validator.equals(password, passwordConfirm)){
      Swal.fire('Advertencia', "Las contraseñas no coinciden", "warning");
      isValid = false;
    }

    const formData: Object = {name, email, password};
    return { isValid, formData}
  }

  return (
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
  );
};
