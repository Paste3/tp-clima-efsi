import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import { useState } from 'react';
import ClimaLogo from './components/ClimaLogo';
function App() {

  const [paisAPP, setPaisAPP] = useState("")
  const [ciudadAPP, setCiudadAPP] = useState("")

  return (
    <>
      <Header />
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <Form setPais={setPaisAPP} setCiudad={setCiudadAPP}/>
          </div>
          <div className='col'>
            <ClimaLogo ciudad={ciudadAPP} pais={paisAPP}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
