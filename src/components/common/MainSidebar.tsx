
import logo from '../../logo.svg';
import './MainSidebar.css';
import '../../App.css';

export const MainSidebar = () => {
  return (
    <>
      <div id='sidebar-wrapper' className="flex-column flex-shrink-0 text-bg-dark customWith">
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
          <img src={logo} className="App-logo" alt="logo" />
          
          <span className="fs-4">ReactShop</span>
        </a>
        <hr></hr>
          <ul className="nav nav-pills flex-column mb-auto">
            <li className="nav-item">
              <a href="#" className="nav-link active">
                <i className="fa-solid fa-home"></i> Inicio</a>
            </li>
            <li>
              <a href="#" className="nav-link text-white">
                
                Dashboard
              </a>
            </li>
            <li>
              <a href="#" className="nav-link text-white">
               
                Orders
              </a>
            </li>
            <li>
              <a href="#" className="nav-link text-white">
                
                Products
              </a>
            </li>
            <li>
              <a href="#" className="nav-link text-white">
               
                Customers
              </a>
            </li>
          </ul>
        <hr></hr>
        <div className="dropdown">
          <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2"></img>
            <strong>mdo</strong>
          </a>
          <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
            <li><a className="dropdown-item" href="#">New project...</a></li>
            <li><a className="dropdown-item" href="#">Settings</a></li>
            <li><a className="dropdown-item" href="#">Profile</a></li>
            <li><a className="dropdown-divider"></a></li>
            <li><a className="dropdown-item" href="#">Sign out</a></li>
          </ul>
        </div>
      </div>
    </>
  )
}
