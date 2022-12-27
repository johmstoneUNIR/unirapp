
import { MainSidebar } from './components/common/MainSidebar';
import { MainTopBar } from './components/common/MainTopBar';

function App() {
  return (
    <main className='d-flex flex-nowrap'>
      <MainSidebar></MainSidebar>
      <div className="b-example-divider b-example-vr"></div>
    </main>
  );
}

export default App;
