import nfc from './nfc.svg';
import './App.css';
import Scan from './containers/Scan';
import { useState } from 'react';
import { ActionsContext } from './contexts/context';

function App() {

  const [actions, setActions] = useState(null);
  const {scan} = actions || {};

  const actionsValue = {actions,setActions};

  const onHandleAction = (actions) =>{
    setActions({...actions});
  }

  return (
      <div className="App">
        <img src={nfc} className="App-logo" alt="logo" />
        <h1>Casio Smart Warranty Card</h1>
        <div className="App-container">
          <button onClick={()=>onHandleAction({scan: 'scanning', write: null})} className="btn">Scan</button>
        </div>
        <ActionsContext.Provider value={actionsValue}>
          {scan && <Scan/>}
        </ActionsContext.Provider>
      </div>
  );
}

export default App;
