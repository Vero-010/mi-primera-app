import React from 'react';
import Saludo from './components/Saludo'; 
import { useState } from 'react'
import senaLogo from '/logosena.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [reverseCount, setReverseCount] = useState(10)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={senaLogo} className="logo" alt="sena logo" />
        </a>
        
      </div>
      <h1>Mi primera App</h1>
      <div>
      {/* Usa el componente como una etiqueta HTML */}
      <Saludo nombre="Veronica" />
    </div>

      <div className="card">
        <p>conteo progresivo</p>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

        <p>conteo regresivo</p>
        <button onClick={() => setReverseCount((prev) => prev - 1)}>
          count is {reverseCount}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      
    </>
  )
}

export default App

