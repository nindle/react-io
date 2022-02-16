import logo from "./logo.svg";
import "./App.css";
import Dome from "./demo";

const App = () => {
  const user = {
    name: "Nindle",
    logo: logo,
  };

  return (
    <div className="App">
      <Dome {...user} />
    </div>
  );
};
export default App;
