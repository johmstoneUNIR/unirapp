
import logo from '../../svg/logo.svg';
import '../../styles/MainSidebar.css';
import '../../styles/App.css';
import { Link } from 'react-router-dom';

export const MainSidebar = () => {
  return (
    <>
      <div id='sidebar-wrapper' className="flex-column flex-shrink-0 text-bg-dark customWith">
        <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
          <img src={logo} className="App-logo" alt="logo" />
          
          <span className="fs-4">ReactShop</span>
        </Link>
        <hr></hr>
          <ul className="nav nav-pills flex-column mb-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link active">
                <i className="fa-solid fa-home"></i> Inicio
              </Link>
            </li>
            <li>
              <Link to="/productos" className="nav-link text-white">
                <i className="fa-solid fa-bag-shopping"></i> Productos
              </Link>
            </li>
            <li>
              <Link to="/pedidos" className="nav-link text-white">
                <i className="fa-solid fa-bag-shopping"></i> Pedidos
              </Link>
            </li>
            <li>
              <Link to="/clientes" className="nav-link text-white">
                <i className="fa-solid fa-users"></i> Clientes
              </Link>
            </li>
          </ul>
        
      </div>
    </>
  )
}
