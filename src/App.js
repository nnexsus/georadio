import Desktop from "./components/desktop";
import BrowserNoRND from "./components/systems/browsernornd";

import './components/desktopStyles.css';
import './components/css/mobile.css';

function App() {
  return (
    <div>
    {
      window.innerWidth >= 550 ? 
      <div className="App">
        <Desktop/>
      </div>
      :
      <div className="MobileApp">
        <BrowserNoRND number={0}/> 
      </div>
    }
    </div>
  );
}

export default App;
