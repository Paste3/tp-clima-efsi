import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import { useState } from 'react';
import ClimaLogo from './components/ClimaLogo';
function App() {

  const [paisAPP, setPaisAPP] = useState("")
  const [ciudadAPP, setCiudadAPP] = useState("")
  const [TempValue, setTemp] = useState(0);
  const [MaxTempValue, setMaxTemp] = useState(0);
  const [MinTempValue, MinsetTemp] = useState(0);
  return (
    <>
      <Header />
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <Form setPais={setPaisAPP} setCiudad={setCiudadAPP} setTemp={setTemp} setMaxTemp={setMaxTemp} MinsetTemp={MinsetTemp} />
          </div>
          <div className='col'>
            <ClimaLogo ciudad={ciudadAPP} pais={paisAPP} temp={TempValue} maxTemp={MaxTempValue} minTemp={MinTempValue} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
