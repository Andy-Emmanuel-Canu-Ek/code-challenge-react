export const NavbarScreen = () => {
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
            <a className="nav-link" href="/calendar">
              Agenda
            </a>
          </li>
        </ul>
      </div>

      <a className="btn btn-outline-info" href="/login">
        <span>Salir</span>
      </a>
    </div>
  );
};
