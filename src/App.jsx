import { useState } from 'react'
import './App.css'
import Weather from './Components/Weather'
import './css/Weather.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="app">
      <Weather/>  

     </div>

      
    </>
  )
}

export default App
