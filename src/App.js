import logo from "./logo.svg";
import "./App.css";
import Gallery from "./gallery";
import { RanColor } from "./hook-color";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>First React</h1>
        <Gallery />

        <RanColor />
      </header>
    </div>
  );
}

export default App;
