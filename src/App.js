
import { useState } from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import ValueProvider from './ValueProvider';

function App() {
const [localstate, setLocalState] =useState(0)
const [nav,setNav]=useState("Portfolio")
  return (
    <div className="App">

      <ValueProvider.Provider value={[localstate,setLocalState,nav,setNav]}>
      <Header></Header>
      <Main></Main>
      </ValueProvider.Provider>
   
    </div>
  );
}

export default App;
