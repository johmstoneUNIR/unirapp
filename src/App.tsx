
import { MainSidebar } from './components/common/MainSidebar';
import { MainTopBar } from './components/common/MainTopBar';

function App() {
  return (
    <>
    <div id="wrapper" className='d-flex'>
      <MainSidebar></MainSidebar>
      
      <div id="page-content-wrapper">
        <MainTopBar></MainTopBar>

        <div className="container-fluid">
        <h2>Módulo de Inventario</h2>
          <div className="row">
            
          </div>
        </div>
      </div>
    </div>
    
    
    </>
  );
}

export default App;
