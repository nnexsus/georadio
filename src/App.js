import { LinkProvider } from "./components/systems/context";
import Desktop from "./components/desktop";


function App() {
  return (
    <LinkProvider>
      <div className="App">
        <Desktop/>
      </div>
    </LinkProvider>
  );
}

export default App;
