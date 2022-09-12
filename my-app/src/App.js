import './App.css';
import Clima from './components/Clima';
console.log(Clima.temp)
function App() {
  return (
    <>
      <p>App</p>
      <p>{Clima.temp}</p>
    </>
  );
}

export default App;
