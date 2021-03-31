import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { logout } from "../../services/authService";


export const NavbarScreen = () => {
  const dispatch = useDispatch()
  const history = useHistory();

  const handleLogout = () => {
    dispatch(logout())
    history.replace("/login")
  }

  return (
    <div className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        Code challenge
      </a>

      <div className="collapse navbar-collapse" id="navbarColor02">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="/usuario">
              Usuarios
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="/agenda">
              Agenda
            </a>
          </li>
        </ul>
      </div>

      <span className="btn btn-outline-info" onClick={handleLogout}>
        <span>Salir</span>
      </span>
    </div>
  );
};
