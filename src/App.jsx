import { useState } from 'react'
import LoginPage from './LoginPage'

function App() {
    const [darkMode, setDarkMode] = useState(false)

    return <LoginPage darkMode={darkMode} setDarkMode={setDarkMode} />
}

export default App
