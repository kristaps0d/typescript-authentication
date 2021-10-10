// General imports
import { useContext } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// Context imports
import { Context } from '../../contexts/user';

// Route imports
import Private from './routes/route.private';
import Public from './routes/route.public';

export default function App() {

  const { status } = useContext(Context);

  return (
    <Router>
      { status === undefined && <div/> }

      { status && <Private/> }

      { status === false && <Public/> }
    </Router>
  )
}