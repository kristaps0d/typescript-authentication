// Module imports
import Router from './modules/router'

// Context imports
import { UserProvider } from './contexts/user';

// Style imports
import './App.scss';


function App() {
  return (
    <div className="App">
      <UserProvider>
        <Router/>
      </UserProvider>
    </div>
  );
}

export default App;
