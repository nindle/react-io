import logo from "./logo.svg";
import "./App.css";
import Dome from "./demo";
import ReactDOM from "react-dom";
const user = {
  age: 18,
};

const App = () => {
  const addAge = e => {
    console.log(e);
    user.age += 1;
    // this.setState({ value: e.user.age });
    // console.log(user.age);
  };
  return (
    <div className="App">
      <Dome name="Nindle" age={user.age} />
      <div id="age" onClick={addAge(user.age)}>
        年龄增加器{user.age}
      </div>
    </div>
  );
};
export default App;
