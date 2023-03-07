import { LinkProvider } from "./components/context";
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
