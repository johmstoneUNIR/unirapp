
import logo from '../../svg/logo.svg';
import '../../styles/MainSidebar.css';
import '../../styles/App.css';

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
              <a href="#/" className="nav-link active">
                <i className="fa-solid fa-home"></i> Inicio</a>
            </li>
            <li>
              <a href="#/" className="nav-link text-white">
                
                Dashboard
              </a>
            </li>
            <li>
              <a href="#/" className="nav-link text-white">
               
                Orders
              </a>
            </li>
            <li>
              <a href="#/" className="nav-link text-white">
                
                Products
              </a>
            </li>
            <li>
              <a href="#/" className="nav-link text-white">
               
                Customers
              </a>
            </li>
            <li>
              <a href="#/" className="nav-link text-white">
               
                Customers
              </a>
            </li>
          </ul>
        
      </div>
    </>
  )
}
