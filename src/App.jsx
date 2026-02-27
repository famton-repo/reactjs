import { useState } from 'react'
import LoginPage from './components/LoginPage'
import './index.css'

function App() {
    const [darkMode, setDarkMode] = useState(false)

    return (
        <div className={darkMode ? 'app dark' : 'app'}>
            <LoginPage darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
    )
}

export default App
