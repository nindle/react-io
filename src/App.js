import logo from './logo.svg';
import './App.css';
import Dome from './demo';

const App = () => {
  const user = {
    name: 'Nindle',
  };

  return (
    <div className="App">
      <Dome name={user.name} logo={logo} age={18} />
    </div>
  );
};
export default App;
