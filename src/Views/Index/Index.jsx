import logoLight from "Assets/Images/brain-logo-light.png";
import logoDark from "Assets/Images/brain-logo-dark.png";
import "./Index.css";
import Header from "Layout/Header/Header";
import { useSelector } from "react-redux";

function App() {
  const darkmode = useSelector((state) => state.darkmode.value);
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <img
          src={!darkmode ? logoLight : logoDark}
          className="App-logo"
          alt="logo"
        />
        <p className="text">Mobiview Code Whisper</p>
      </header>
    </div>
  );
}

export default App;
