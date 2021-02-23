import Login from './Login';
import UseLocalStorage from '../Hooks/UseLocalStorage';
import Dashboard from './Dashboard';

function App() {

  const [id, setId] = UseLocalStorage('id');  
  return (
      id ? <Dashboard id={id} /> : <Login onIdSubmit={setId} /> 
  );
}

export default App;
