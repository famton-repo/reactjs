import { useState } from 'react';
import Welcome from './pages/Welcome';
import Home from './pages/Home';
import './index.css';

function App() {
  const [hasStarted, setHasStarted] = useState(false);

  return (
    <>
      {!hasStarted ? (
        <Welcome onContinue={() => setHasStarted(true)} />
      ) : (
        <Home />
      )}
    </>
  );
}

export default App;
