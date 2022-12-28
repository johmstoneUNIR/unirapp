import '../../styles/Navbar.css';

export const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <button type="button" className="btn btn-sm" ><i className="fa fa-bars" aria-hidden="true"></i></button>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse navbar-right" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fa-solid fa-clock"></i> 2022-12-28 01:30
                </a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fa-solid fa-question-circle"></i> Ayuda
                </a>
                </li>
                <li className="nav-item">
                  <div className="dropdown">
                    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                      <i className="fa-solid fa-user"></i> Perfil
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end">
                      <li><a className="dropdown-item" href="#">Configuraciones</a></li>
                      <li><a className="dropdown-item" href="#">Cerrar Sesion</a></li>
                      
                    </ul>
                  </div>
                </li>
                

            </ul>
            </div>
        </div>
    </nav>
    </>
  )
}
