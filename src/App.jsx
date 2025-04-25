import React from 'react';
import Saludo from './components/Saludo'; 
import { useState } from 'react'
import senaLogo from '/logosena.png'
//import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="mb-6">
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img src={senaLogo} alt="sena logo" className="w-32 h-32 object-contain" />
        </a>
      </div>

      <h1 className="text-3xl font-bold text-blue-700 mb-4">Mi primera App</h1>

      <div className="mb-6">
        <Saludo nombre="Verónica" />
      </div>

      <div className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center">
        {/* Texto de conteo */}
        <p className="text-2xl font-semibold mb-6">El valor es: {count}</p>

        {/* Botones */}
        <div className="flex space-x-4">
          <button
            onClick={() => setCount((prev) => prev + 1)}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded"
          >
            Incrementar
          </button>

          <button
            onClick={() => setCount((prev) => prev - 1)}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded"
          >
            Decrementar
          </button>
        </div>
      </div>

      <p className="mt-10 text-gray-500">
        Haz clic en los logos de Vite y React para aprender más
      </p>
    </div>
  );
}

export default App;
