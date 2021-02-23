import react, { useState } from 'react';
import Login from './Login';
import UseLocalStorage from '../Hooks/UseLocalStorage';

function App() {

  const [id, setId] = UseLocalStorage('id');  
  return (
      <>
      {id}    
      <Login onIdSubmit={setId} />
      </>
  );
}

export default App;
