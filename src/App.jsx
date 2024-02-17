import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>

        <a href="https://wallpapercave.com/wp/GOeIy6n.jpg" target="_blank">
          <img src="https://wallpapercave.com/wp/GOeIy6n.jpg" className="logo react" alt="totoro" />
        </a>

      </div>
      <h1>vercel react ci p_0_c </h1>
      first commit <br />
      second commit <br />
      third commit
    </>
  )
}

export default App
