import logo from "./logo.svg";
import "./App.css";
function AppHeader() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>First React</h1>
      </header>
    </div>
  );
}
export default AppHeader;
