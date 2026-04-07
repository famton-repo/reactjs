import Weather from './components/Weather'
import './index.css'

function App() {
  return (
    <div style={{
      display: 'grid',
      minHeight: '100vh',
      placeItems: 'center',
      background: 'linear-gradient(135deg, #0a0e1a, #1e1b4b)'
    }}>
      <Weather />
    </div>
  )
}

export default App
