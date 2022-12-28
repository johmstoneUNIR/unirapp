
import { useState } from 'react';
import { Breadcrumb } from './components/common/Breadcrumb';
import { MainSidebar } from './components/common/MainSidebar';
import { Navbar } from './components/common/Navbar';
import { useToggle } from './hooks/useToogle';


function App() {
  const {isActive, toggleMenu} = useToggle(false);

  return (
    <>
    <div id="wrapper" className={isActive ? 'd-flex toggled': 'd-flex'} >
      <MainSidebar></MainSidebar>
      
      <div id="page-content-wrapper">
        <Navbar toggleMenu={toggleMenu}></Navbar>

        <div className="container-fluid">
          <h2 className='mt-2'>Módulo de Inventario</h2>
          <Breadcrumb></Breadcrumb>
          <div className="row">
            <div className="col">
              <div className="shadow-sm p-3 mb-5 bg-white rounded">Main Content</div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
    
    
    </>
  );
}

export default App;
