// import logo from "./assets/images/logo.svg";
import "./assets/css/App.css";
// import Dome from "./views/demo";
// import Todolist from "./views/todolist";
import SearchGithub from "./views/searchGithub";

const App = () => {
  // const user = {
  //   name: "Nindle",
  //   logo: logo,
  // };

  return (
    <div className="App">
      <SearchGithub />
    </div>
  );
};
export default App;
