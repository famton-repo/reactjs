import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className="app">
            <header className="app-header">
                <img src={reactLogo} className="logo react" alt="React logo" />
                <h1>Welcome to React</h1>
                <p className="subtitle">Built with Vite ⚡</p>
            </header>

            <main className="app-main">
                <div className="card">
                    <button onClick={() => setCount((count) => count + 1)}>
                        Count: {count}
                    </button>
                    <p>Click the button to increment the counter!</p>
                </div>

                <div className="info-grid">
                    <div className="info-card">
                        <h3>⚛️ React 18</h3>
                        <p>The latest version of React with concurrent features and improved performance.</p>
                    </div>
                    <div className="info-card">
                        <h3>⚡ Vite</h3>
                        <p>Lightning-fast build tool with instant HMR and optimized production builds.</p>
                    </div>
                    <div className="info-card">
                        <h3>🎨 Modern CSS</h3>
                        <p>Clean, responsive styles with CSS custom properties and flexbox layouts.</p>
                    </div>
                </div>
            </main>

            <footer className="app-footer">
                <p>Edit <code>src/App.jsx</code> and save to see live updates</p>
            </footer>
        </div>
    )
}

export default App
