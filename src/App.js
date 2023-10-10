import { LinkProvider } from "./components/systems/context";
import Desktop from "./components/desktop";
import BrowserNoRND from "./components/systems/browsernornd";

import './components/desktopStyles.css';
import './components/css/mobile.css';

function App() {
  return (
    <LinkProvider>
      <div className="App">
        <Desktop/>
      </div>
      <div className="MobileApp">
        <BrowserNoRND number={0}/> 
      </div>
    </LinkProvider>
  );
}

export default App;
