import './App.css';
import Clima from './components/Clima';
import Header from './components/Header';
import LogoClima from './components/LogoClima';
import Form from './components/Form';
console.log(Clima)
function App() {
  return (
    <>
      <Header />
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <Form />
          </div>
          <div className='col'>
            <LogoClima />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
